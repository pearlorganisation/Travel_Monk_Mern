import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { packagesService } from "./packageActions";

export const getAllPackages = createAsyncThunk(
  "packages/get",
  async (thunkAPI) => {
    try {
      return await packagesService.getPackages();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const getSinglePackage = createAsyncThunk(
  "singlePackage/get",
  async (id, thunkAPI) => {
    try {
      return await packagesService.getSinglePackage(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const packagesState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  packages: [],
  singlePackage: {},
  message: "",
};

export const tripsSlice = createSlice({
  name: "packages",
  initialState: packagesState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllPackages.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllPackages.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.packages = action.payload;
      })
      .addCase(getAllPackages.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })

      .addCase(getSinglePackage.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSinglePackage.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.singlePackage = action.payload;
      })
      .addCase(getSinglePackage.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      });
  },
});

export default tripsSlice.reducer;
