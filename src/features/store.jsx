import authReducer from "../features/auth/authSlice";
import userReducer from "../features/user/userSlice";
import tripReducer from "../features/trips/tripsSlice";
import packageReducer from "./package/packageSlice";
import hotelsReducer from "./hotel/hotelSlice";
import destinationsReducer from "./destination/destinationSlice";
import partnersReducer from "./partners/partnersSlice";
import contactReducer from "./contact/contactSlice";
import buscruizeReducer from "./BusCruizeContactAction/BusCruizeSlice";
import cruiseReducer from "./cruize/cruizeSlice";
import resetReducer from "./ResetPassword/sendMailSlice";
import destinationVehicleReducer from "./DestinationVehicle/destinationVehicleSlice";
import prebuiltPackageEnquiryReducer from "./PrebuiltPackage/prebuiltPackageSlice";
import fullyCustomizePackageReducer from "./FullyCustomizePackage/FullCustomizeSlice";
import previousBookingsReducer from "./previousBookings/previousBookingsSlice";
import destinationLocationReducer from "../features/Location/locationSlice"
import { combineReducers } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";

import storage from "redux-persist/lib/storage";
// Persist configuration
// Persist configuration
const persistConfig = {
  key: "Travel_Monk",
  storage,
};

// Combine reducers
const combinedReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  trip: tripReducer,
  packages: packageReducer,
  cruises: cruiseReducer,
  hotels: hotelsReducer,
  destination: destinationsReducer,
  partner: partnersReducer,
  contact: contactReducer,
  buscruize: buscruizeReducer,
  password: resetReducer,
  destination_vehicle: destinationVehicleReducer,
  previousBookings: previousBookingsReducer,
  prebuiltPackage: prebuiltPackageEnquiryReducer, // for the prebuilt package enquiry
  fullyCustomizePackage: fullyCustomizePackageReducer, // for the fully customize package
  locations: destinationLocationReducer // this holds the location based on the destination
});

// Apply persistReducer to the combined reducer
const persistedReducer = persistReducer(persistConfig, combinedReducer);

// Configure store
const store = configureStore({
  reducer: persistedReducer,
});

// Persistor
const persistor = persistStore(store);

export { store, persistor };
