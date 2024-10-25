import { createSlice } from "@reduxjs/toolkit";
import {
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

           
    },
});

export default usersSlice.reducer;
