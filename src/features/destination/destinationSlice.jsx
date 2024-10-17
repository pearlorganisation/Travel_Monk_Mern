import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { destinationsService } from "./destinationActions";

export const searchDestinations = createAsyncThunk(
  "searchResult/get",
  async (name, thunkAPI) => {
    try {
      return await destinationsService.searchDestination(name);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

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
      .addCase(searchDestinations.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(searchDestinations.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.searchResult = action.payload;
      })
      .addCase(searchDestinations.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      });
  },
});

export default destinationsSlice.reducer;
