import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../services/axiosInterceptor";

export const getAllDestinations = createAsyncThunk(
  "trip/Dest/get",
  async ({destType, page, limit}, thunkAPI) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axiosInstance.get(
        `/api/v1/destinations?type=${destType}&page=${page}&limit=${limit}`,
        config
      );

      if (data) {
        console.log("Data", data);
        return data;
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getSingleDestination = createAsyncThunk(
  "trip/singleDest/get",
  async (id, thunkAPI) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axiosInstance.get(
        `/api/v1/destinations/${id}`,
        config
      );

      if (data) {
        // console.log("Data", data);
        return data;
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getAllActivitiesByDestination = createAsyncThunk(
  "activities/singleIndianDest/get",
  async (id, thunkAPI) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await axiosInstance.get(
        `/api/v1/destinations/${id}/activities`,
        config
      );

      if (response.data) {
        return response.data;
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
