import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../services/axiosInterceptor";


/**-------------for sending the recovery link-------------------*/
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


        /**---------------------------------------resetting the password------------------------------------------------------- */

        export const resetPassword = createAsyncThunk(
            "user/resetPassword", async ({
                token,
                password
            }, {
                rejectWithValue
            }) => {
                try {
                    const config = {
                        headers: {
                            "Content-Type": "application/json"
                        },
                    }
                    const {
                        data
                    } = await axiosInstance.post(`/api/v1/users/reset-password/${token}`, {
                            password
                        },
                        config
                    )
                    return data;
                } catch (error) {
                    if (error.response && error.response.data.message) {
                        return rejectWithValue(error.response.data.message);
                    } else {
                        return rejectWithValue(error.message);
                    }
                }
            })