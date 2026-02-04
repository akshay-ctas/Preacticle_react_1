import { axiosInstance } from "./axiosInstance";

export const createUser = async (data) => {
  const res = await axiosInstance.post("/users", data);
  console.log(data);

  return res.data;
};

export const getUsers = async (page) => {
  const res = await axiosInstance.get(`/users?page=${page}`);
  return res.data;
};

export const getAllUsers = async ({ pageParam = 1 }) => {
  const res = await axiosInstance.get(`/users?page=${pageParam}&limit=5`);
  return res.data.data;
};

export const deleteUser = async (id) => {
  const res = await axiosInstance.delete(`/users/${id}`);
  return res.data;
};

export const updateUser = async (id, data) => {
  const res = await axiosInstance.put(`/users/${id}`, data);
  return res.data;
};
