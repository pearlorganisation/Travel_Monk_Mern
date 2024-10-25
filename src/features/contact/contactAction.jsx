import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../services/axiosInterceptor";

export const submitContact = createAsyncThunk("contact/form",
    async({name , email, phoneNumber, message},{ rejectWithValue }) =>{
        try {
            const config ={
                headers: {
                    "Content-Type":"application/json",
                }
            }
            const { data } = await axiosInstance.post("/api/v1/contacts",
                {name, email, phoneNumber, message},
                config,
            );
          console.log("Registered Contact US Form",data);
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