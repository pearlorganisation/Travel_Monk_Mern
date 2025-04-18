import { axiosInstance } from "../../services/axiosInterceptor";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllHotels = createAsyncThunk("hotels/get", async (thunkAPI) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await axiosInstance.get(`/api/v1/hotels`, config);

    if (response.data) {
      return response.data;
    }
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const getBestHotels = createAsyncThunk(
  "best-hotels/get",
  async (thunkAPI) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await axiosInstance.get(
        `/api/v1/hotels?isBest=true`,
        config
      );

      if (response.data) {
        return response.data;
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getSingleHotel = createAsyncThunk(
  "singleHotel/get",
  async (id, thunkAPI) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await axiosInstance.get(`/api/v1/hotels/${id}`, config);

      if (response.data) {
        return response.data;
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

/**-----------------------to get hotels based on destination------------------------ */

export const getHotelsByDestination = createAsyncThunk(
  "hotels/by-destination",
  async ({ id, priceRange, search, page , limit,source}, thunkAPI) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axiosInstance.get(
        `/api/v1/destinations/${id}/hotels`,
        {
          params: {
            priceRange,
            search,
            page,
            source,
            limit
          },
          config,
        }
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
