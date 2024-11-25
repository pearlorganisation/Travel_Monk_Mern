import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../services/axiosInterceptor";

export const forgotPassword = createAsyncThunk(
    "user/forgotPassword/sendMail", async ({
        email
    }, {
        rejectWithValue
    }) => {
        try {
            const config = {
                headers: {
                    "Content-Type": "application/json"
                }
            }
            const {
                data
            } = await axiosInstance.post(`/api/v1/users/forgot-password`, {
                email
            })
            return data;
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            } else {
                return rejectWithValue(error.message);
            }
        }
    });
