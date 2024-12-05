import { createSlice } from "@reduxjs/toolkit";
import { getAllCruizes, getSingleCruize } from "./cruizeActions";

const cruisesState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  cruizes: [],
  singleCruize: {},
  message: "",
};

const cruisesSlice = createSlice({
  name: "cruizes",
  initialState: cruisesState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllCruizes.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllCruizes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.cruizes = action.payload;
      })
      .addCase(getAllCruizes.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })

      .addCase(getSingleCruize.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSingleCruize.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.singleCruize = action.payload;
      })
      .addCase(getSingleCruize.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      });
  },
});

export default cruisesSlice.reducer;
