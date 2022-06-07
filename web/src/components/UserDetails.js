import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDataContext } from "../context/DataContext";
import { updateUser, deleteUser } from "../services/users";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Grid from "styled-components-grid";
import {
  CardWrapperDetail,
  CardHeader,
  CardHeadingDetail,
  CardBody,
  CardFieldsetDetail,
  CardInput,
  CardInputRadio,
  SelectDetail,
  CardFieldsetSubmitDetail,
  InputSubmit,
} from "../components/ui/styledComponents";

const UserDatails = () => {
  const { userCurrentContext, dispatch } = useDataContext();

  let navigate = useNavigate();

  const [id, setId] = useState(userCurrentContext.id);
  const [email, setEmail] = useState(userCurrentContext.email);
  const [name, setName] = useState(userCurrentContext.name);
  const [gender, setGender] = useState(userCurrentContext.gender);
  const [status, setStatus] = useState(userCurrentContext.status);

  useEffect(() => {
    setId(userCurrentContext.id);
    setEmail(userCurrentContext.email);
    setName(userCurrentContext.name);
    setGender(userCurrentContext.gender);
    setStatus(userCurrentContext.status);

    setValue("id", userCurrentContext.id);
    setValue("email", userCurrentContext.email);
    setValue("name", userCurrentContext.name);
    setValue("gender", userCurrentContext.gender);
    setValue("status", userCurrentContext.status);
  }, [userCurrentContext]);

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const callFetchUpdate = (data) => {
    try {
      updateUser(data)
      .then((updatedUser) => {
        console.log("respuesta update", updateUser);
        dispatch({
          type: "UPDATE_USER",
          value: updatedUser,
        });
        dispatch({
          type: "RELOAD_LIST_USERS",
          value: true,
        });
        toast.success("The User Was Updated Successfully", {
          theme: "colored",
        });
      });
    } catch (error) {
      console.log(error);
      toast.error("The User Was Not Updated", {
        theme: "colored",
      });
    }
  };

  const callFetchDelete = (id) => {
    try {
      deleteUser(id).then((deletedUser) => {
        toast.success("The User Has Been Deleted", {
          theme: "colored",
        });

        dispatch({
          type: "RELOAD_LIST_USERS",
          value: true,
        });
        dispatch({
          type: "DELETE_USER",
        });
      });
      navigate("/users/");
    } catch (error) {
      console.log(error);
      toast.error("The User Was Not Deleted", {
        theme: "colored",
      });
    }
  };

  const onSubmit = (data, e) => {
    const element = document.activeElement;
    if (element.name === "update") {
      callFetchUpdate(data);
    }

    if (element.name === "delete") {
      callFetchDelete(data.id);
    }
    e.preventDefault();
    e.target.reset();
  };

  return (
    <>
      <CardWrapperDetail>
        <CardHeader>
          <CardHeadingDetail>User Detail</CardHeadingDetail>
        </CardHeader>

        <form onSubmit={handleSubmit(onSubmit)}>
          <CardBody>
            <Grid>
              <div>
                <CardFieldsetDetail>
                  Email
                  <CardInput
                    type="text"
                    name="email"
                    placeholder="Email"
                    {...register("email", {
                      required: true,
                      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
                    })}
                  />
                  {errors.email?.type === "required" && (
                    <p>El Campo Email es Requerido</p>
                  )}
                  {errors.email?.type === "pattern" && (
                    <p>El Formato del Email es Incorrecto</p>
                  )}
                </CardFieldsetDetail>
              </div>

              <div>
                <CardFieldsetDetail>
                  Name
                  <CardInput
                    placeholder="Name"
                    type="text"
                    name="name"
                    {...register("name", {
                      required: true,
                      maxLength: 30,
                    })}
                  />
                  {errors.name?.type === "required" && (
                    <p>El Campo Nombre es Requerido</p>
                  )}
                  {errors.name?.type === "maxLength" && (
                    <p>
                      El Campo Nombre Debe Contener como Maximo 30 Caracteres
                    </p>
                  )}
                </CardFieldsetDetail>
              </div>

              <div>
                <CardFieldsetDetail>
                  Gender
                  <SelectDetail name="gender" required {...register("gender")}>
                    <option value="" hidden>
                      Select...
                    </option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </SelectDetail>
                </CardFieldsetDetail>
              </div>
            </Grid>

            <Grid>
              <div>
                <CardFieldsetDetail>Status</CardFieldsetDetail>
                <CardFieldsetDetail>
                  <CardInputRadio
                    type="radio"
                    name="status"
                    required
                    {...register("status")}
                    value="inactive"
                  />
                  Inactive
                  <CardInputRadio
                    type="radio"
                    name="status"
                    required
                    {...register("status")}
                    value="active"
                  />
                  Active
                </CardFieldsetDetail>
              </div>
            </Grid>
          </CardBody>

          <CardFieldsetSubmitDetail>
            <InputSubmit
              primary
              type="submit"
              name="update"
              value="Update User"
            />
            <InputSubmit type="submit" name="delete" value="Delete User" />
          </CardFieldsetSubmitDetail>
        </form>
      </CardWrapperDetail>
    </>
  );
};

export default UserDatails;
