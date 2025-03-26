import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../services/axiosInterceptor";

export const BusCruizeContact = createAsyncThunk("buscruize/contact",
    async({ name, email, type, startDestination, endDestination, numberOfSeats, startDate,message }, { rejectWithValue }) =>{
        try {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                }
            }
            const { data } = await axiosInstance.post("/api/v1/contacts/bus-cruise",
                { name, email, type, startDestination, endDestination, numberOfSeats, startDate,message },
                config,
            );
            console.log("Registered Contact US Form", data);
            toast.success("We will contact you soon")
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
)