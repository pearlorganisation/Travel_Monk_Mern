import { createAsyncThunk } from "@reduxjs/toolkit";

import { axiosInstance } from "../../services/axiosInterceptor";
import { toast } from "react-toastify";

export const searchDestination = createAsyncThunk(
  "searchResult/get",
  async (name, thunkAPI) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const result = await axiosInstance.get(
        `/api/v1/destinations/search?destination=${name}`,
        config
      );
      console.log(result, "my searched dest");
      return result.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getPopularDestination = createAsyncThunk(
  "popular/get",
  async (_, thunkAPI) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const result = await axiosInstance.get(
        `/api/v1/destinations/popular`,
        config
      );
      console.log(result, "popular");
      return result.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getPacakgesByDestination = createAsyncThunk(
  "packageByDest/get",
  async (id, thunkAPI) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axiosInstance.get(
        `/api/v1/destinations/${id}/packages`,
        config
      );
      console.log(data, "immortals of melluha");
      return data;
    } catch (error) {
      if (error?.response?.data?.message) {
        console.log(error?.response?.data?.message, "Custom error");
        // toast.error(error?.response?.data?.message, "Custom error");
      } else {
        console.log(error, "Server error");
        // toast.error(error, "Server error");
      }

      // console.log(error, "13124141414");
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const destinationsService = {
  searchDestination,
  // getAllDestinationNames,
};
