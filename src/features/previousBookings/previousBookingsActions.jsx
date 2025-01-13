import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../services/axiosInterceptor";

export const getUserBookings = createAsyncThunk(
  "user-bookings/get",
  async (_, thunkAPI) => {
    // const getCookieValue = (name) => {
    //   const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
    //   return match ? match[2] : null;
    // };

    // const token = getCookieValue("access_token");

    // console.log("Access Token", access_token);
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axiosInstance.get(`/api/v1/bookings/me`, config);

      if (data) {
        console.log("User Bookings", data);
        return data;
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
