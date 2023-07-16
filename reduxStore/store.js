"use client";
import { configureStore } from "@reduxjs/toolkit";
import customerReducer from "./storeSliceies/customer";

const store = configureStore({
  reducer: {
    customerRecord: customerReducer,
  },
});

export default store;
