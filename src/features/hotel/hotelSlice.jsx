import { createSlice } from "@reduxjs/toolkit";
import {
  getAllHotels,
  getBestHotels,
  getHotelsByDestination,
  getSingleHotel,
} from "./hotelActions";

const hotelState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  hotels: [],
  bestHotels: [],
  singleHotel: {},
  destinationHotels: {},
  paginate: {},
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

      .addCase(getBestHotels.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBestHotels.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.bestHotels = action.payload;
      })
      .addCase(getBestHotels.rejected, (state, action) => {
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
      })
      .addCase(getHotelsByDestination.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getHotelsByDestination.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.destinationHotels = {};
        state.message = action.error;
      })
      .addCase(getHotelsByDestination.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.destinationHotels = action.payload.data;
        state.paginate = action.payload.pagination;
      });
  },
});

export default hotelsSlice.reducer;
