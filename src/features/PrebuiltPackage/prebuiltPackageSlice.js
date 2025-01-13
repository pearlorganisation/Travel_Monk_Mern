import { createSlice } from "@reduxjs/toolkit"
import { sendPrebuiltPackageEnquiry } from "./prebuiltPackageAction"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";

const initialState= {
    isLoading: false,
    isSuccess: false,
    isError: false,
}

const prebuiltEnquirySlice = createSlice({
    name:"prebuilt-package",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(sendPrebuiltPackageEnquiry.pending,(state)=>{
            state.isLoading = true
        })
        .addCase(sendPrebuiltPackageEnquiry.rejected,(state,action)=>{
            state.isLoading = false
            state.isSuccess = false
            state.isError = true
            toast("Failed to send the enuiry")
        })
        .addCase(sendPrebuiltPackageEnquiry.fulfilled,(state,action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.isError = false
            toast("Enquiry is submitted")
        })
    }
})

export default prebuiltEnquirySlice.reducer