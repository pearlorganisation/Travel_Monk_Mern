import { createSlice } from "@reduxjs/toolkit"
 
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
import { getMyFullyCustomizedEnquiries, sendFullyCustomizePackageEnquiry } from "./FullCustomizePackageAction";
const initialState = {
    isLoading: false,
    isSuccess: false,
    isError:false,
    isSubmitted :false,
    fullyCustomizedEnquiries :{},
    paginateFully:{}
}

const FullyCustomizeSlice = createSlice({
    name:"fully-customize",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(sendFullyCustomizePackageEnquiry.pending,(state)=>{
            state.isLoading = true
            state.isSubmitted= false
        })
        .addCase(sendFullyCustomizePackageEnquiry.rejected,(state,action)=>{
            state.isLoading = false
            state.isSuccess = false
            state.isError= true
            state.isSubmitted= false
            toast.error(action.payload,{position:"top-right"})
        })
        .addCase(sendFullyCustomizePackageEnquiry.fulfilled, (state,action)=>{
            state.isLoading = false
            state.isError = false
            state.isSuccess = true
            state.isSubmitted= true
            toast.success("Enquiry is successfully submitted",{position:"top-right"})
        })
        .addCase(getMyFullyCustomizedEnquiries.pending,(state)=>{
            state.isLoading= true
            state.isError = false
            state.isSuccess = false
        })
        .addCase(getMyFullyCustomizedEnquiries.rejected,(state,action)=>{
            state.isLoading = false
            state.isSuccess = false
            state.isError = true
            state.fullyCustomizedEnquiries = {}
            state.paginateFully = {}
            toast.error(action.payload,{position:"top-center"})
        })
        .addCase(getMyFullyCustomizedEnquiries.fulfilled,(state,action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.isError = false
            state.fullyCustomizedEnquiries = action.payload.data
            state.paginateFully = action.payload.pagination
            toast.success("Full customised enquiries recieved",{position:"top-center"})
        })
    }
})

export default FullyCustomizeSlice.reducer;