import { createSlice } from "@reduxjs/toolkit"
import { DestinationLocation } from "./locationAction"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";

const initialState = {
    isLoading: false,
    isError: false,
    isSuccess: false,
    destinationLocations:{}
}

const destinationLocation = createSlice({
    name:"locations",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(DestinationLocation.pending,(state)=>{
            state.isLoading= true
        })
        .addCase(DestinationLocation.rejected,(state,action)=>{
            state.isLoading = false
            state.isSuccess = false
            state.isError = true
            state.destinationLocations={}
            toast.error(action.payload,{position:"top-right"})
        })
        .addCase(DestinationLocation.fulfilled,(state,action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.isError = false
            state.destinationLocations= action.payload
        })
    }
})

export default destinationLocation.reducer