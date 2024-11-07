import { createSlice } from "@reduxjs/toolkit";
import {
    changePassword,
    getAuthUserDetails
  
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

           
    },
});

export default usersSlice.reducer;
