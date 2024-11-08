import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
    changePassword,
    forgotPassword,
    getAuthUserDetails,
    resetPassword
  
} from "./userActions";

const userState = {
    isLoading: false,
    isError: false,
    isSuccess: false,
    userInfo: null,
    message: "",
};

export const usersSlice = createSlice({
    name: "user",
    initialState: userState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAuthUserDetails.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getAuthUserDetails.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.userInfo = action.payload;
            })
            .addCase(getAuthUserDetails.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            })
            .addCase(changePassword.pending,(state)=>{
                state.isLoading = true;
            })
            .addCase(changePassword.rejected,(state,action)=>{
                state.isLoading = false;
                state.isSuccess = false;
                state.isError = true;
                state.message = action.error;
            })
            .addCase(changePassword.fulfilled,(state,action)=>{
                state.isError = false;
                state.isLoading = false;
                state.isSuccess = true;
            })
            .addCase(forgotPassword.pending,(state)=>{
                state.isLoading = true;
            })
            .addCase(forgotPassword.rejected,(state,action)=>{
                state.isError = true;
                state.isSuccess = false;
                state.isLoading = false;
                toast("Failed to send the email")
            })
            .addCase(forgotPassword.fulfilled,(state,action)=>{
                state.isError= false;
                state.isLoading = true;
                state.isSuccess = true;
                toast("A Password reset mail is sent to your email")
            })
           .addCase(resetPassword.pending,(state)=>{
            state.isLoading = true;
           })
           .addCase(resetPassword.rejected,(state,action)=>{
            state.isLoading = false;
            state.isError= true;
            state.isSuccess = false;
            toast("Failed to change the password")
           })
           .addCase(resetPassword.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.isSuccess = true;
            state.isError = false;
            toast("Successfully changed the password")
           })
    },
});

export default usersSlice.reducer;
