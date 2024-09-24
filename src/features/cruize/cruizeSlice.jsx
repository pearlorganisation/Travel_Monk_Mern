import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { cruizesService } from "./cruizeActions";

export const getAllCruizes = createAsyncThunk(
  "cruizes/get",
  async (thunkAPI) => {
    try {
      return await cruizesService.getCruizes();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const getSingleCruize = createAsyncThunk(
  "singleCruize/get",
  async (id, thunkAPI) => {
    try {
      return await cruizesService.getSingleCruize(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const cruisesState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  cruizes: [],
  singleCruize: {},
  message: "",
};

const cruisesSlice = createSlice({
  name: "cruizes",
  initialState: cruisesState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllCruizes.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllCruizes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.cruizes = action.payload;
      })
      .addCase(getAllCruizes.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })

      .addCase(getSingleCruize.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSingleCruize.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.singleCruize = action.payload;
      })
      .addCase(getSingleCruize.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      });
  },
});

export default cruisesSlice.reducer;
