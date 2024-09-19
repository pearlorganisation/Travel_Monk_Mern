import { createSlice } from "@reduxjs/toolkit";
import { registerUser, userLogin } from "./authActions";

const initialState = {
  loading: false,
  userInfo: null,
  userToken: null,
  error: null,
  success: false,
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
          state.userToken = action.payload.userToken;
        });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
