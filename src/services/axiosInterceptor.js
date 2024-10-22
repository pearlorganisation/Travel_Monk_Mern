import axios from "axios";

// This code is used to access redux store in this file.
let store;
export const injectStore = (_store) => {
  store = _store;
};
const baseURL =
  import.meta.env.VITE_APP_ENV === "development"
    ? import.meta.env.VITE_APP_BACKEND_DEV_BASE_URL
    : import.meta.env.VITE_APP_BACKEND_PROD_BASE_URL;

// Creating new axios instance
export const axiosInstance = axios.create({
  withCredentials: true,
  baseURL,
});
