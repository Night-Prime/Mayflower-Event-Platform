import axios from "axios";

export const clientMakeRequest = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export const adminMakeRequest = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  credentials: "include",
  withCredentials: true,
});

adminMakeRequest.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
