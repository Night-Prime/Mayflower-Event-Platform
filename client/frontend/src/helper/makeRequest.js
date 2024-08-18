import axios from "axios";

export const clientMakeRequest = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true,
});

export const adminMakeRequest = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  credentials: "include",
});
