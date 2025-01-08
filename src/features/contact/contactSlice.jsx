import { createSlice } from "@reduxjs/toolkit";
import { hotelContact, submitContact } from "./contactAction";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialState = {
    loading: false,
    success: false,
    error: null,
    contact: null
};

const contactSlice = createSlice({
    name: "contact",
    initialState,
    reducers: {
        resetContactForm: (state) => {
            state.loading = false;
            state.success = false;
            state.error = null;
            state.contact = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(submitContact.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.success = false;
            })
            .addCase(submitContact.fulfilled, (state) => {
                state.loading = false;
                state.success = true;
                state.error = null
            })
            .addCase(submitContact.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                state.success = false;
                toast("Failed to submit the form");
            })
            .addCase(hotelContact.pending,state=>{
                state.loading = true
                state.error = null;
                state.success = false; 
            })
            .addCase(hotelContact.rejected,(state,action)=>{
                state.loading = false;
                state.error = action.payload;
                state.success = false;
                toast("Failed to submit the form");  
            })
            .addCase(hotelContact.fulfilled, (state,action)=>{
                state.loading = false;
                state.success = true;
                state.error = null
                toast("Contact Submitted Successfully")  
            })
    },
});

export const { resetContactForm } = contactSlice.actions;
export default contactSlice.reducer;