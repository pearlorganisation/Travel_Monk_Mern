import { createSlice } from "@reduxjs/toolkit"
import { forgotPassword } from "./sendMailAction"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";

const initialState = {
    isLoading: false,
    isError: false,
    isSuccess: false,
    mailSent: false,
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
    }
})
export const {
    resetState
} = resetMail.actions;
export default resetMail.reducer;