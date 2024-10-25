import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../services/axiosInterceptor";

export const getAuthUserDetails = createAsyncThunk(
    "user/AuthUser/get",
    async (thunkAPI) => {
        try {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                },
            };
            const { data } = await axiosInstance.get(
                "/api/v1/users/me",
                config
            );

            if (data) {
                console.log("Data", data);
                return data;
            }
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);


