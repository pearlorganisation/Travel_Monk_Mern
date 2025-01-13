import { createSlice } from "@reduxjs/toolkit";
import {
  getAllDestinations,
  getSingleDestination,
  getAllActivitiesByDestination,
} from "./tripActions";

const destinationState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  destinations: null,
  singleDestination: null,
  activities: null,
  message: "",
};

export const tripsSlice = createSlice({
  name: "trip",
  initialState: destinationState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllDestinations.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllDestinations.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.destinations = action.payload;
      })
      .addCase(getAllDestinations.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })

      .addCase(getSingleDestination.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
      })
      .addCase(getSingleDestination.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.singleDestination = action.payload;
      })
      .addCase(getSingleDestination.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        // state.singleDestination = null;
        state.message = action.error;
      })

      .addCase(getAllActivitiesByDestination.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllActivitiesByDestination.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.activities = action.payload;
      })
      .addCase(getAllActivitiesByDestination.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      });
  },
});

export default tripsSlice.reducer;
