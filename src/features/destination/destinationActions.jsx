import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const backendURL = "https://travel-monk-backend.onrender.com";
const localURL = "http://localhost:5000";

export const searchDestination = createAsyncThunk(
  "searchResult/get",
  async (name, thunkAPI) => {
    try {
      const result = await axios.get(
        `${backendURL}/api/v1/destinations/search?destination=${name}`
      );
      console.log(result, "result nayan search");
      return result.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const destinationsService = {
  searchDestination,
};
