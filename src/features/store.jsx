import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import tripReducer from "../features/trips/tripsSlice";
import packageReducer from "./package/packageSlice";
import cruizeReducer from "./cruize/cruizeSlice";
import hotelsReducer from "./hotel/hotelSlice";
import destinationsReducer from "./destination/destinationSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    trip: tripReducer,
    packages: packageReducer,
    cruises: cruizeReducer,
    hotels: hotelsReducer,
    destination: destinationsReducer,
  },
});
export default store;
