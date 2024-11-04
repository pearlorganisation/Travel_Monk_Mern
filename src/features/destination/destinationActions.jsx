import { createAsyncThunk } from "@reduxjs/toolkit";

import { axiosInstance } from "../../services/axiosInterceptor";

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
      console.log(result, "result nayan search");
      return result.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getAllDestinationNames = createAsyncThunk(
  "all-destinations/get",
  async (_, thunkAPI) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const result = await axiosInstance.get(`/api/v1/destinations`, config);
      console.log(result, "result nayan search");
      return result.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const destinationsService = {
  searchDestination,
  getAllDestinationNames,
};
