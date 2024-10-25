import { createSlice } from "@reduxjs/toolkit";
import { BusCruizeContact } from "./BusCruizeAction";

const initialState={
    loading: false,
    success: false,
    error: null,
    buscruizecontact: null
}

const buscruizeSlice =createSlice({
    name: "buscruize",
    initialState,
    reducers:{
        resetBusCruizeForm:(state) =>{
            state.loading = false;
            state.success= false;
            state.error = null;
            state.buscruize = null;
        },
    },
    extraReducers:(builder)=>{
        builder
        .addCase(BusCruizeContact.pending, (state)=>{
            state.loading = true;
            state.error = null;
            state.success= false;
        })
        .addCase(BusCruizeContact.fulfilled,(state)=>{
            state.loading = false;
            state.success = true;
        })
        .addCase(BusCruizeContact.rejected, (state,action)=>{
            state.loading = false;
            state.error = action.payload;
            state.success = false;
        });
    },
});

export const { resetBusCruizeForm }= buscruizeSlice.actions;
export default buscruizeSlice.reducer;