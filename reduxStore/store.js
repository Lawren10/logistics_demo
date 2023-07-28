"use client";
import { configureStore } from "@reduxjs/toolkit";
import customerReducer from "./storeSliceies/customer";
import receiverReducer from "./storeSliceies/receiver";
import shipmentReducer from "./storeSliceies/shipment";
import customerListReducer from "./storeSliceies/customersList";
import trackingDetailReducer from "./storeSliceies/trackingSlice";
import authDetailReducer from "./storeSliceies/auth";

const store = configureStore({
  reducer: {
    customerRecord: customerReducer,
    receiverRecord: receiverReducer,
    shipmentRecord: shipmentReducer,
    customerList: customerListReducer,
    trackingDetails: trackingDetailReducer,
    authDetails: authDetailReducer,
  },
});

export default store;
