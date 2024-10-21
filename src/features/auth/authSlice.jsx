 
import { createSlice } from "@reduxjs/toolkit";
import { registerUser, userLogin } from "./authActions";

import { PURGE } from "redux-persist";


const initialState = {
  loading: false,
  userInfo: null,
  isUserLoggedIn: false,
  userToken: null,
  error: null,
  success: false,
  // accessToken: null,
  // refreshToken:null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem("isLoggedIn");
      state.loading = false;
      state.userInfo = null;
      state.userToken = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(userLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      }),
      builder
        .addCase(registerUser.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        })
        .addCase(userLogin.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        }),
      builder
        .addCase(registerUser.fulfilled, (state, action) => {
          (state.loading = false), (state.success = true);

        })
        .addCase(userLogin.fulfilled, (state, action) => {
          state.loading = false;
          state.userInfo = action.payload;
          // state.success = true;
          // state.error = false;
          state.userToken = action.payload.userToken;
          state.isUserLoggedIn = true
          // state.accessToken = localStorage.getItem("accessToken"); // Get token from localStorage
          // state.refreshToken = localStorage.getItem("refreshToken");
        });
    // builder.addCase(PURGE, () => {
    //   return initialState;
    // });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
