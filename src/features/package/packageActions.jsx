import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../services/axiosInterceptor";

export const getAllPackages = createAsyncThunk(
  "packages/get",
  async (thunkAPI) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await axiosInstance.get(`/api/v1/packages`, config);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const getSinglePackage = createAsyncThunk(
  "singlePackage/get",
  async (id, thunkAPI) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await axiosInstance.get(
        `/api/v1/packages/${id}`,
        config
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);


export const getBestSellerPackages = createAsyncThunk(
  "get/bestsellerpackages",async({page,limit,type}, {rejectWithValue})=>{
    try {
      const config = {
        headers:{
          "Content-Type":"application/json"
        }
      }
      const { data } = await axiosInstance.get(`/api/v1/packages/best-seller?type=${type}&page=${page}&limit=${limit}`,config)
      return data
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)
