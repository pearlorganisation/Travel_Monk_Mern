import { createSlice } from "@reduxjs/toolkit"
 
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
import { sendFullyCustomizePackageEnquiry } from "./FullCustomizePackageAction";
const initialState = {
    isLoading: false,
    isSuccess: false,
    isError:false,
}

const FullyCustomizeSlice = createSlice({
    name:"fully-customize",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(sendFullyCustomizePackageEnquiry.pending,(state)=>{
            state.isLoading = true
        })
        .addCase(sendFullyCustomizePackageEnquiry.rejected,(state,action)=>{
            state.isLoading = false
            state.isSuccess = false
            state.isError= true
            toast.error(action.payload,{position:"top-right"})
        })
        .addCase(sendFullyCustomizePackageEnquiry.fulfilled, (state,action)=>{
            state.isLoading = false
            state.isError = false
            state.isSuccess = true
            toast.success("Enquiry is successfully submitted",{position:"top-right"})
        })
    }
})

export default FullyCustomizeSlice.reducer;