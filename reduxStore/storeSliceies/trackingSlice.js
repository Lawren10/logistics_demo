"use client";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
let initialState = {
  trackingDetail: "",
  loading: false,
  showDetails: false,
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
    console.log("result from database :", res.data);
    return res.data;
  }
);

const trackingSlice = createSlice({
  name: "trackingDetails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTrackingDetail.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getTrackingDetail.fulfilled, (state, action) => {
      state.trackingDetail = action.payload;
      state.showDetails = true;
      state.loading = false;
    });
    builder.addCase(getTrackingDetail.rejected, (state) => {
      state.showDetails = "error";
      state.loading = false;
    });
  },
});

const { action, reducer } = trackingSlice;

export default reducer;
