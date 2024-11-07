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
                return data.data;
            }
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);


/*--------------------------------------------------Action for canging the password----------------------------------------------------- */

export const changePassword = createAsyncThunk("user/updatePassword", async({ currentPassword, newPassword, confirmNewPassword },{ rejectWithValue })=>{
    try {
        const config ={
            headers:{
                "Content-Type":"application/json",
            }
        }
        const { data } = await axiosInstance.post("/api/v1/users/change-password",{ currentPassword, newPassword, confirmNewPassword},
            config
        )
        console.log(data," Updated password data");
        if(data.success){
            
        }
    } catch (error) {
        if (error.response && error.response.data.message) {
            return rejectWithValue(error.response.data.message);
        } else {
            return rejectWithValue(error.message);
        }
    }
})