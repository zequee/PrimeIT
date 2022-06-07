import axios from "axios";

const options = {
  headers: {
    Accept: "application/json",
    Authorization: `${process.env.REACT_APP_TOKEN}`,
    "Content-Type": "application/json",
  },
};

export const getUsers = async () => {
  return await axios
    .get(`${process.env.REACT_APP_USERS}`, options)
    .then((response) => {
      const { data } = response;
      return data;
    });
};

export const createUser = async (data) => {
  return await axios
    .post(`${process.env.REACT_APP_USERS}`, data, options)
    .then((response) => {
      const { data } = response;
      return data;
    });
};

export const updateUser = async (data) => {
  return await axios
    .put(`${process.env.REACT_APP_USERS}/${data.id}`, data, options)
    .then((response) => {
      const { data } = response;
      return data;
    });
};

export const deleteUser = async (id) => {
  return await axios
    .delete(`${process.env.REACT_APP_USERS}/${id}`, options)
    .then((response) => {
      const { data } = response;
      return data;
    });
};
