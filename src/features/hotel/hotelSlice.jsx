import { createSlice } from "@reduxjs/toolkit";
import { getAllHotels, getSingleHotel } from "./hotelActions";

const hotelState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  hotels: [],
  singleHotel: {},
  message: "",
};

export const hotelsSlice = createSlice({
  name: "hotels",
  initialState: hotelState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllHotels.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllHotels.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.hotels = action.payload;
      })
      .addCase(getAllHotels.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })

      .addCase(getSingleHotel.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSingleHotel.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.singleHotel = action.payload;
      })
      .addCase(getSingleHotel.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      });
  },
});

export default hotelsSlice.reducer;
