import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../services/axiosInterceptor";
import _ from "lodash";

export const sendFullyCustomizePackageEnquiry = createAsyncThunk(
  "send/full-cutomize-enquiry",
  async (formData, { rejectWithValue }) => {
    try {
      console.log("the formdatain action is", formData)
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axiosInstance.post(
        `/api/v1/customization-enquiries/fully-customize`,
        formData,
        config
      );
      return data.data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);


/** to get previously submitted fully customised package enquiries */
export const getMyFullyCustomizedEnquiries = createAsyncThunk(
  "get/fullyCustomizedEnquiries", async({page, limit}, {rejectWithValue})=>{
    try {
      const config ={
        headers:{
          "Content-Type":"application/json"
        }
      }
      const {
        data
      } = await axiosInstance.get(`/api/v1/customization-enquiries/fully-customize/my-enquiries?page=${page}&limit=${limit}`, config)
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