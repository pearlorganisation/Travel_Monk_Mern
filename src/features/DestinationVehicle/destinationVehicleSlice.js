import { createSlice } from "@reduxjs/toolkit"
import { getDestinationVehicle } from "./destinationVehicleaction"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
import { faL } from "@fortawesome/free-solid-svg-icons";

const initialState ={
    isLoading: false,
    isError: false,
    isSuccess: false,
    destinationVehicles:null
}

const get_Destination_Vehicle_Slice = createSlice({
    name:"destination_vehicle",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(getDestinationVehicle.pending,(state)=>{
            state.isLoading = true
        })
        .addCase(getDestinationVehicle.rejected,(state,action)=>{
            state.isLoading = false;
            state.isError= true;
            state.isSuccess = false;
            toast.error(action.payload,{position:"top-right"})
        })
        .addCase(getDestinationVehicle.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.isError = false;
            state.isSuccess= true;
            state.destinationVehicles = action.payload;
        })
    }
})

export default get_Destination_Vehicle_Slice.reducer;