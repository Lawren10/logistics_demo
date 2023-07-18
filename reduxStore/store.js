"use client";
import { configureStore } from "@reduxjs/toolkit";
import customerReducer from "./storeSliceies/customer";
import receiverReducer from "./storeSliceies/receiver";
import shipmentReducer from "./storeSliceies/shipment";

const store = configureStore({
  reducer: {
    customerRecord: customerReducer,
    receiverRecord: receiverReducer,
    shipmentRecord: shipmentReducer,
  },
});

export default store;
