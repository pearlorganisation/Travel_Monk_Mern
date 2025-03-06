import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../services/axiosInterceptor";

export const getPartners = createAsyncThunk(
  "partners/get",
  async (thunkAPI) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const  { data } = await axiosInstance.get(`/api/v1/partners`, config);
      console.log("the data is", data)
      return data.data
     
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
