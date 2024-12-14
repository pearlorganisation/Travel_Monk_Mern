import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../services/axiosInterceptor";

export const getUserBookings = createAsyncThunk(
  "user-bookings/get",
  async (_, thunkAPI) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axiosInstance.get(
        `/api/v1/bookings/pre-built-packages`,
        config
      );

      if (data) {
        console.log("User Bookings", data);
        return data;
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
