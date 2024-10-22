import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const backendURL = "https://travel-monk-backend.onrender.com";
const localURL = "http://localhost:5000";

export const getAllDestinations = createAsyncThunk(
  "trip/Dest/get",
  async (thunkAPI) => {
    try {
      const response = await axios.get(
        `${backendURL}/api/v1/trips/destination`
      );

      if (response.data) {
        console.log("Data", response.data);
        return response.data;
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
      const response = await axios.get(
        `${backendURL}/api/v1/trips/destination/${id}`
      );

      if (response.data) {
        console.log("Data", response.data);
        return response.data;
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
      const response = await axios.get(
        `${backendURL}/api/v1/activities/destination/${id}`
      );

      if (response.data) {
        return response.data;
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// export default tripsService = {
//   getAllDestinations,
//   getSingleDestination,
//   getAllActivitiesByDestination,
// };

// `${localURL}/api/v1/trips/indian`
