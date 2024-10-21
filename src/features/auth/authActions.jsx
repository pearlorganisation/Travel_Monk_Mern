import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { createAsyncThunk } from "@reduxjs/toolkit";

const backendURL = "https://travel-monk-backend.onrender.com";
const localBackendUrl = "http://localhost:5000";
const second = ""
export const registerUser = createAsyncThunk(
  "auth/register",
  async ({ name, email, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
       
      };
      const { data } = await axios.post(
        `${backendURL}/api/v1/auth/signup`,
        { name, email, password },
        config,
        {
          withCredential: true
        }
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
              // withCredentials: true,
               headers: {
          "Content-Type": "application/json",
        },
        
       

      };
      const { data } = await axios.post(
        `${backendURL}/api/v1/auth/login`,
        { email, password },
        config,
       
        
      );
      // store user's token in local storage
      console.log("login data", data)
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
