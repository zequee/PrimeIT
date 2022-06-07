import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import UserDetails from "./UserDetails";
import { useDataContext } from "../context/DataContext";
import { getUsers } from "../services/users";
import {
  CardWrapperListUser,
  CardHeader,
  CardHeadingListUser,
  Wrap,
  Dropdown,
  PaginationListUser,
} from "../components/ui/styledComponents";
import Pagination from "./Pagination";
import Spinner from "./ui/Spinner/Spinner";

const User = () => {
  const { userContext, dispatch, flagContext } = useDataContext();

  const [clicked, setClicked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const paginateFront = () => setCurrentPage(currentPage + 1);
  const paginateBack = () => setCurrentPage(currentPage - 1);

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }
    setClicked(index);
  };

  useEffect(() => {
    try {
      setLoading(true);
      getUsers().then((users) => {
        dispatch({
          type: "UPLOAD_LIST_USERS",
          value: users,
        });
        dispatch({
          type: "RELOAD_LIST_USERS",
          value: false,
        });
        setLoading(false);
      });
    } catch (er) {
      setError(er);
    }
  }, [flagContext]);

  if (error) {
    return <h1>Error...</h1>;
  }
  if (loading) {
    return (
      <h1>
        Loading...
        <Spinner />
      </h1>
    );
  }

  const handleClickUser = (user) => {
    dispatch({
      type: "CLICK_LIST_USER",
      value: user,
    });
  };

  return (
    <>
      {userContext ? <UserDetails /> : null}
      <div className="Table">
        <CardWrapperListUser>
          <CardHeader>
            <CardHeadingListUser>User List</CardHeadingListUser>
          </CardHeader>
          {userContext
            .slice(indexOfFirstPost, indexOfLastPost)
            .map((user, index) => {
              return (
                <>
                  <Wrap key={index} onClick={() => toggle(index)}>
                    <h1>
                      <Link 
                        onClick={() => handleClickUser(user)}
                        to={"/users/" + user.id}
                      >
                        {user.name}{" "}
                      </Link>
                    </h1>
                  </Wrap>
                  {clicked === index ? (
                    <Dropdown>
                      <>
                        <div className="container mx-auto px-4 sm:px-8">
                          <div className="py-8">
                            <table className="border-collapse border border-slate-400 ">
                              <thead>
                                <tr>
                                  <th className="border border-slate-300 ">
                                    Email
                                  </th>
                                  <th className="border border-slate-300 ">Name</th>
                                  <th className="border border-slate-300 ">
                                    Gender
                                  </th>
                                  <th className="border border-slate-300 ">
                                    Status
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td className="border border-slate-300 flex space-x-4">
                                    {user.email}
                                  </td>
                                  <td className="border border-slate-300 flex space-x-4">
                                    {user.name}
                                  </td>
                                  <td className="border border-slate-300 flex space-x-4">
                                    {user.gender}
                                  </td>
                                  <td className="border border-slate-300 flex space-x-4">
                                    {user.status}
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </>
                    </Dropdown>
                  ) : null}
                </>
              );
            })}
          <PaginationListUser>
            <Pagination
              postsPerPage={postsPerPage}
              totalPosts={userContext.length}
              paginateBack={paginateBack}
              paginateFront={paginateFront}
              currentPage={currentPage}
            />
          </PaginationListUser>
        </CardWrapperListUser>
      </div>
    </>
  );
};

export default User;
