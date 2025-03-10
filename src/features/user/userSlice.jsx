import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
 
 

import {
    changePassword,
    getAuthUserDetails,
    resetPassword
  
} from "./userActions";
 
 
const userState = {
    isLoading: false,
    isError: false,
    isSuccess: false,
    userInfo: null,
    message: "",
    changePasswordInfo: { // for changing the logged in user password
        isLoading: false,
        isError: false,
        isSuccess: false,
    },            
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
                state.changePasswordInfo = state.changePasswordInfo ?? {}
                state.changePasswordInfo.isLoading = true;
                state.changePasswordInfo.isSuccess = false;

            })
            .addCase(changePassword.rejected,(state,action)=>{
                state.changePasswordInfo = state.changePasswordInfo ?? {}
                state.changePasswordInfo.isLoading = false;
                state.changePasswordInfo.isSuccess = false;
                state.changePasswordInfo.isError = true;
                toast("Failed To Change the Password")
            })
            .addCase(changePassword.fulfilled,(state,action)=>{
                state.changePasswordInfo = state.changePasswordInfo ?? {}
                state.changePasswordInfo.isError = false;
                state.changePasswordInfo.isLoading = false;
                state.changePasswordInfo.isSuccess = true;
                 
                toast("Successfully changed the password")
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
