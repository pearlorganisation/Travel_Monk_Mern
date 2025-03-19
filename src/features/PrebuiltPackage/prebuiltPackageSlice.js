import { createSlice } from "@reduxjs/toolkit"
import { getMyPrebuiltEnquiry, sendPrebuiltPackageEnquiry } from "./prebuiltPackageAction"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";

const initialState= {
    isLoading: false,
    isSuccess: false,
    isError: false,
    prebuiltEnquiries:{},
    paginatePrebuilt:{}
}

const prebuiltEnquirySlice = createSlice({
    name:"prebuilt-package",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(sendPrebuiltPackageEnquiry.pending,(state)=>{
            state.isLoading = true
            state.isError= false
            state.isSuccess= false
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
        .addCase(getMyPrebuiltEnquiry.pending,(state)=>{
            state.isLoading = true
            state.isSuccess = false
            state.isError = false
        })
        .addCase(getMyPrebuiltEnquiry.rejected,(state,action)=>{
            state.isError = true
            state.isSuccess = false
            state.isLoading = false
            state.paginatePrebuilt ={}
            toast(action.payload,{position:"top-center"})
        })
        .addCase(getMyPrebuiltEnquiry.fulfilled,(state,action)=>{
            state.isSuccess = true
            state.isError = false
            state.isLoading = false
            state.prebuiltEnquiries = action.payload.data
            state.paginatePrebuilt = action.payload.pagination
            toast("Enquiries received")
        })
    }
})

export default prebuiltEnquirySlice.reducer