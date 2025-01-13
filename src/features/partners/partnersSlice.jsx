import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPartners } from "./partnersActions";

const partnersState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  partners: [],
  message: "",
};

export const partnersSlice = createSlice({
  name: "partners",
  initialState: partnersState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPartners.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPartners.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.partners = action.payload;
      })
      .addCase(getPartners.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      });
  },
});

export default partnersSlice.reducer;
