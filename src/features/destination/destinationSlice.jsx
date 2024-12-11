import { createSlice } from "@reduxjs/toolkit";
import {
  searchDestination,
  getPopularDestination,
  getPacakgesByDestination,
} from "./destinationActions";

const searchState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  searchResult: null,
  packagesByDestination: null,
  popular: [],
  message: "",
};

export const destinationsSlice = createSlice({
  name: "destination",
  initialState: searchState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(searchDestination.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
      })
      .addCase(searchDestination.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.searchResult = action.payload.data;
      })
      .addCase(searchDestination.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(getPopularDestination.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPopularDestination.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.popular = action.payload;
      })
      .addCase(getPopularDestination.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(getPacakgesByDestination.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPacakgesByDestination.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.packagesByDestination = action.payload;
      })
      .addCase(getPacakgesByDestination.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      });
  },
});

export default destinationsSlice.reducer;
