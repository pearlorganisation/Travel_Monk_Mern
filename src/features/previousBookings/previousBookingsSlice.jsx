import { createSlice } from "@reduxjs/toolkit";
import { getUserBookings } from "./previousBookingsActions";

const prevBookingsState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  userBookings: null,
  message: "",
  paginateBookings:{}
};

export const tripsSlice = createSlice({
  name: "user-bookings",
  initialState: prevBookingsState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserBookings.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserBookings.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.userBookings = action.payload.data;
        state.paginateBookings= action.payload.pagination
      })
      .addCase(getUserBookings.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.userBookings ={}
        state.paginateBookings={}
        state.message = action.error;
      });
  },
});

export default tripsSlice.reducer;
