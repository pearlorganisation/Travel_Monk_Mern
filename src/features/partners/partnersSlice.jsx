import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { partnersService } from "./partnersActions";

export const getPartners = createAsyncThunk(
  "partners/get",
  async (thunkAPI) => {
    try {
      return await partnersService.getPartners();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

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
