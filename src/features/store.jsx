import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import tripReducer from "../features/trips/tripsSlice";
import packageReducer from "./package/packageSlice";
const store = configureStore({
  reducer: {
    auth: authReducer,
    trip: tripReducer,
    packages: packageReducer,
  },
});
export default store;
