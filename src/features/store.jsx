import authReducer from "../features/auth/authSlice";
import userReducer from "../features/user/userSlice";
import tripReducer from "../features/trips/tripsSlice";
import packageReducer from "./package/packageSlice";
import cruizeReducer from "./cruize/cruizeSlice";
import hotelsReducer from "./hotel/hotelSlice";
import destinationsReducer from "./destination/destinationSlice";
import partnersReducer from "./partners/partnersSlice";
import contactReducer from "./contact/contactSlice"
import buscruizeReducer from "./BusCruizeContactAction/BusCruizeSlice"
import resetReducer from "./ResetPassword/sendMailSlice"
import { combineReducers } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
 
import storage from 'redux-persist/lib/storage'
// Persist configuration
// Persist configuration
const persistConfig = {
  key: 'Travel_Monk',
  storage,
};

// Combine reducers
const combinedReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  trip: tripReducer,
  packages: packageReducer,
  cruises: cruizeReducer,
  hotels: hotelsReducer,
  destination: destinationsReducer,
  partners: partnersReducer,
  contact: contactReducer,
  buscruize: buscruizeReducer,
  password: resetReducer
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