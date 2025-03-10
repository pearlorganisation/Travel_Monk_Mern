import axios from "axios";
import {
  logout
} from "../features/auth/authSlice";

// This code is used to access redux store in this file.
let store;
export const injectStore = (_store) => {
  store = _store;
};
export const baseURL =
  import.meta.env.VITE_APP_ENV === "development" ?
  import.meta.env.VITE_APP_BACKEND_DEV_BASE_URL :
  import.meta.env.VITE_APP_BACKEND_PROD_BASE_URL;

// Creating new axios instance
export const axiosInstance = axios.create({
  withCredentials: true,
  baseURL,
});


// Interceptors for request
axiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    // Do something with response error
    return Promise.reject(error);
  }
);

// // Interceptors for response
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        await axiosInstance.post("/api/v1/users/refresh-token");
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        console.log(refreshError, "-----refresh failed");

        store.dispatch(logout());
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);