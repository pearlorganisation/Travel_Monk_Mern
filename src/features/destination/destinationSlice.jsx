import { createSlice } from "@reduxjs/toolkit";
import {
  searchDestination,
  // getAllDestinationNames,
} from "./destinationActions";

const searchState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  searchResult: null,
  // destinationNames: null,
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
    // .addCase(getAllDestinationNames.pending, (state) => {
    //   state.isLoading = true;
    // })
    // .addCase(getAllDestinationNames.fulfilled, (state, action) => {
    //   state.isLoading = false;
    //   state.isError = false;
    //   state.isSuccess = true;
    //   state.destinationNames = action.payload;
    // })
    // .addCase(getAllDestinationNames.rejected, (state, action) => {
    //   state.isLoading = false;
    //   state.isError = true;
    //   state.isSuccess = false;
    //   state.message = action.error;
    // });
  },
});

export default destinationsSlice.reducer;
