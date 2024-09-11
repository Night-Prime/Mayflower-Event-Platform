import axios from "axios";

export const clientMakeRequest = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export const adminMakeRequest = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  credentials: "include",
});

adminMakeRequest.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
