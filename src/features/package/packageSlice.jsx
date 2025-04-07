import { createSlice } from "@reduxjs/toolkit";

import { getAllPackages, getBestSellerPackages, getSinglePackage } from "./packageActions";

const packagesState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  packages: [],
  singlePackage: {},
  message: "",
  bestSellersPackages:{},
  bestSellerPaginate :{}
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
      })
      .addCase(getBestSellerPackages.pending,state=>{
        state.isLoading= true
      })
      .addCase(getBestSellerPackages.rejected,state=>{
        state.isLoading= false
        state.isSuccess= false
        state.isError= true
        state.bestSellersPackages = {}
        state.bestSellerPaginate={}
      })
      .addCase(getBestSellerPackages.fulfilled,(state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.isError = false
        state.bestSellersPackages = action.payload.data
        state.bestSellerPaginate= action.payload.pagination
      })
  },
});

export default tripsSlice.reducer;
