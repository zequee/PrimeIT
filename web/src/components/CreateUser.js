import React from "react";
import { useForm } from "react-hook-form";
import { useDataContext } from "../context/DataContext";
import { createUser } from "../services/users";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
CardWrapper,
HeaderImage,
CardBody,
CardFieldset,
CardInput,
Select,
CardInputRadio,
CardFieldsetSubmit,
InputSubmit,
} from "../components/ui/styledComponents";

const CreateUser = () => {
  const { dispatch } = useDataContext();
  let navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onError = (errors, e) => console.log(errors, e);

  const callFetch = (data) => {
    try {
      createUser(data)
        .then((newUser) => {
          dispatch({
            type: "ADD_USER",
            value: newUser,
          });
          toast.success("The User Was Added Successfully", {
            theme: "colored",
          });
          navigate(`/users/${newUser.id}`);
        })
        .catch(() => {
          toast.error("Email Already Exists", {
            theme: "colored",
          });
        });
    } catch (error) {
      toast.error("User was not added", {
        theme: "colored",
      });
      console.log("Catch Error", error);
    }
  };

  const onSubmit = (data, e) => {
    e.target.reset();
    e.preventDefault();
    callFetch(data);
  };

  return (
    <>
      <CardWrapper>
        <HeaderImage src={`${process.env.REACT_APP_HEADER_PHOTO}`} />
        <form onSubmit={handleSubmit(onSubmit, onError)}>
          <CardBody>
            <CardFieldset>
              Email
              <CardInput
                type="text"
                required
                name="email"
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
            </CardFieldset>

            <CardFieldset>
              Name
              <CardInput
                type="text"
                required
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
                <p>El Campo Nombre Debe Contener como Maximo 30 Caracteres</p>
              )}
            </CardFieldset>

            <CardFieldset>
              Gender
              <Select
                name="gender"
                required
                {...register("gender", {
                  value: "male",
                })}
              >
                <option value="" hidden>
                  Select...
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </Select>
            </CardFieldset>

            <CardFieldset>Status</CardFieldset>
            <CardFieldset>
              <CardInputRadio
                required
                {...register("status")}
                type="radio"
                name="status"
                value="inactive"
                id="inactive"
              />
              Inactive
            </CardFieldset>

            <CardFieldset>
              <CardInputRadio
                required
                {...register("status")}
                type="radio"
                name="status"
                value="active"
                id="active"
                checked
              />
              Active
            </CardFieldset>
            <CardFieldset></CardFieldset>
          </CardBody>
          <CardFieldsetSubmit>
            <InputSubmit primary type="submit" value="Create User" />
          </CardFieldsetSubmit>
        </form>
      </CardWrapper>
    </>
  );
};

export default CreateUser;

