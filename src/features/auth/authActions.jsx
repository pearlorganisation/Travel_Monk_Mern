import { axiosInstance } from "../../services/axiosInterceptor.js";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { createAsyncThunk } from "@reduxjs/toolkit";

export const registerUser = createAsyncThunk(
  "auth/register",
  async (info, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axiosInstance.post(
        "/api/v1/auth/signup",
        info,
        config
      );

      console.log("Register Data", data);
      toast.success("Mail is sent to your email!"); // Show success toast
      return data;
    } catch (error) {
      // return custom error message from backend if present
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const userLogin = createAsyncThunk(
  "auth/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axiosInstance.post(
        "/api/v1/auth/login", // No need to repeat backendURL
        { email, password },
        config
      );

      // store user's token in local storage
      console.log("login data", data);
      localStorage.setItem("isLoggedIn", true);

      return data;
    } catch (error) {
      console.log("Error", error);
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

/**-----------------------------------------Action for sending logout request to backedn-----------------------------------------*/
export const userLogout = createAsyncThunk(
  "user/logout",
  async (_, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axiosInstance.post(`/api/v1/auth/logout`, config);
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
