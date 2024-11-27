import { createSlice } from "@reduxjs/toolkit"
import { forgotPassword, resetPassword } from "./sendMailAction"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";

const initialState = {
    isLoading: false,
    isError: false,
    isSuccess: false,
    mailSent: false,
    resetSuccess: false,
}

const resetMail = createSlice({
    name:"resetMail",
    initialState,
    reducers:{
        resetState:(state)=>{
            state.isLoading = false;
            state.isError= false;
            state.isSuccess = false,
            state.mailSent = false
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(forgotPassword.pending,(state)=>{
            state.isLoading = true;
        })
        .addCase(forgotPassword.rejected,(state)=>{
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            toast("Failed to send the link. Try Again")
        })
        .addCase(forgotPassword.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.mailSent = true;
            toast("A mail with Revovery Link is sent to your mail.")
            //add a set timout to reset the state after 20 sec
           
        })
        .addCase(resetPassword.pending,(state)=>{
            state.isLoading = true;
        })
        .addCase(resetPassword.rejected,(state)=>{
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.resetSuccess = false;
        })
        .addCase(resetPassword.fulfilled,(state)=>{
            state.isLoading = false;
            state.isLoading = false;
            state.isSuccess = true;
            state.resetSuccess = true;
        })
    }
})
export const {
    resetState
} = resetMail.actions;
export default resetMail.reducer;