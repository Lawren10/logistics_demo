"use client";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
let initialState = {
  trackingNumber: "",
  trackingDetail: {},
  loading: false,
  showDetails: false,
  trackingNumberError: false,
};

export const getTrackingDetail = createAsyncThunk(
  "trackingDetails/getTrackingDetail",
  async (id, thunkApi) => {
    let res = await axios.get("/api/trackingRecord/getRecord", {
      params: {
        trackingId: id,
      },
    });

    // console.log("tracking num :", id);
    // console.log("result from database :", res.data);
    return res.data;
  }
);

const trackingSlice = createSlice({
  name: "trackingDetails",
  initialState,
  reducers: {
    updateNumber: (state, action) => {
      const { name, value } = action.payload;
      state[name] = value;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getTrackingDetail.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getTrackingDetail.fulfilled, (state, action) => {
      if (action.payload === null) {
        state.showDetails = false;
        state.loading = false;
        state.trackingNumberError = true;
        return;
      }
      state.trackingDetail = action.payload;
      state.trackingNumberError = false;
      state.showDetails = true;
      state.loading = false;
    });
    builder.addCase(getTrackingDetail.rejected, (state) => {
      state.showDetails = "error";
      state.loading = false;
      state.showDetails = false;
    });
  },
});

const { actions, reducer } = trackingSlice;
export const { updateNumber } = actions;

export default reducer;
