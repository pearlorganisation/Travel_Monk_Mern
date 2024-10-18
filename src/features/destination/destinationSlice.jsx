import { createSlice } from "@reduxjs/toolkit";
import { searchDestination } from "./destinationActions";

const searchState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  searchResult: null,
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
      });
  },
});

export default destinationsSlice.reducer;
