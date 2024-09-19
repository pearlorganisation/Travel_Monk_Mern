import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import tripReducer from "../features/trips/tripsSlice";
const store = configureStore({
  reducer: {
    auth: authReducer,
    trip: tripReducer,
  },
});
export default store;
