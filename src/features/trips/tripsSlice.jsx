import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { tripService } from "./tripActions";

export const getAllIndianDestinations = createAsyncThunk(
  "trip/indianDest/get",
  async (thunkAPI) => {
    try {
      return tripService.getIndianDestinations();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const getSingleIndianDesstination = createAsyncThunk(
  "trip/singleIndianDest/get",
  async (id, thunkAPI) => {
    try {
      return tripService.getSingleIndianDestination(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getAllActivitiesByDestination = createAsyncThunk(
  "activities/singleIndianDest/get",
  async (id, thunkAPI) => {
    try {
      return tripService.getActivityByDestination(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getSingleInterDestination = createAsyncThunk(
  "trip/singleInterDest/get",
  async (id, thunkAPI) => {
    try {
      return tripService.getSingleInternationalDestination(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getAllInternationalDestinations = createAsyncThunk(
  "trip/internationalDest/get",
  async (thunkAPI) => {
    try {
      return tripService.getInternationalDestinations();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const destinationState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  indiandestination: "",
  singleDestination: "",
  activities: "",
  internationaldestination: "",
  message: "",
};

export const tripsSlice = createSlice({
  name: "trip",
  initialState: destinationState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllIndianDestinations.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllIndianDestinations.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.indiandestination = action.payload;
      })
      .addCase(getAllIndianDestinations.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })

      .addCase(getSingleIndianDesstination.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSingleIndianDesstination.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.singleDestination = action.payload;
      })
      .addCase(getSingleIndianDesstination.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })

      .addCase(getAllActivitiesByDestination.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllActivitiesByDestination.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.activities = action.payload;
      })
      .addCase(getAllActivitiesByDestination.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })

      .addCase(getAllInternationalDestinations.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllInternationalDestinations.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.internationaldestination = action.payload;
      })
      .addCase(getAllInternationalDestinations.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(getSingleInterDestination.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSingleInterDestination.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.singleDestination = action.payload;
      })
      .addCase(getSingleInterDestination.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      });
  },
});

export default tripsSlice.reducer;
