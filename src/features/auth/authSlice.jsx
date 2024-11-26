import { createSlice } from "@reduxjs/toolkit";
import { registerUser, userLogin, userLogout } from "./authActions";
import { toast } from "react-toastify";

const initialState = {
  loading: false,
  userInfo: null,
  isUserLoggedIn: false,
  userToken: null,
  error: null,
  success: false,
  userLoggedOut:{
    loading:false,
    error:false,
    success: false
  }
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem("isLoggedIn");
      state.loading = false;
      state.isUserLoggedIn = false;
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
          state.isUserLoggedIn = true;
        })
        .addCase(userLogout.pending,(state)=>{
          state.userLoggedOut = state.userLoggedOut ?? {};
          state.userLoggedOut.loading = true;
        })
        .addCase(userLogout.fulfilled,(state,action)=>{
          state.userLoggedOut = state.userLoggedOut ?? {};
          state.userLoggedOut.error = false;
          state.userLoggedOut.success = true;
          state.userLoggedOut.loading = false;
          toast.success("Successfully Logged Out",{
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
          })
        })
        .addCase(userLogout.rejected,(state,action)=>{
          state.userLoggedOut = state.userLoggedOut ?? {};
          state.userLoggedOut.loading = false;
          state.userLoggedOut.error = true;
          state.userLoggedOut.success = false;
          toast.error(action.payload,{
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
          })
        })
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
