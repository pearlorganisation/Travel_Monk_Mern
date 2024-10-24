import { axiosInstance } from "../../services/axiosInterceptor";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllHotels = createAsyncThunk("hotels/get", async (thunkAPI) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await axiosInstance.get(`/api/v1/hotels`, config);

    if (response.data) {
      return response.data;
    }
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
export const getSingleHotel = createAsyncThunk(
  "singleHotel/get",
  async (id, thunkAPI) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await axiosInstance.get(`/api/v1/hotels/${id}`, config);

      if (response.data) {
        return response.data;
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
