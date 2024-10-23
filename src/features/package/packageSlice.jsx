import { createSlice } from "@reduxjs/toolkit";

import { getAllPackages, getSinglePackage } from "./packageActions";

const packagesState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  packages: [],
  singlePackage: {},
  message: "",
};

export const tripsSlice = createSlice({
  name: "packages",
  initialState: packagesState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllPackages.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllPackages.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.packages = action.payload;
      })
      .addCase(getAllPackages.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })

      .addCase(getSinglePackage.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSinglePackage.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.singlePackage = action.payload;
      })
      .addCase(getSinglePackage.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      });
  },
});

export default tripsSlice.reducer;
