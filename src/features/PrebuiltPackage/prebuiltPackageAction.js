import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../services/axiosInterceptor";

export const sendPrebuiltPackageEnquiry = createAsyncThunk(
    "send/prebuilt-enquiry",async(enquirydata,{rejectWithValue})=>{
        try {
            const config ={
                headers:{
                    "Content-Type":"application/json"
                }
            }
            const {
                data
            } = await axiosInstance.post(`/api/v1/customization-enquiries/pre-built`,enquirydata,config)
            return data.data
        } catch (error) {
              if (error.response && error.response.data.message) {
                  return rejectWithValue(error.response.data.message);
              } else {
                  return rejectWithValue(error.message);
              }
        }
    }
)

/** to get the prebuilt package enquiry submitted by the user */
export const getMyPrebuiltEnquiry = createAsyncThunk(
    "get/prebuilt-enquiries",async({page,limit},{rejectWithValue})=>{
        try {
            const config ={
                headers:{
                    "Content-Type":"application/json"
                }
            }
            const {
                data
            } = await axiosInstance.get(`/api/v1/customization-enquiries/pre-built/my-enquiries?page=${page}&limit=${limit}`, config)
            return data
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            } else {
                return rejectWithValue(error.message);
            }
            
        }
    }
)