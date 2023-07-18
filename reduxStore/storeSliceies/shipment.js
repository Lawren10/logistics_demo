"use client";
import { createSlice } from "@reduxjs/toolkit";
let initialState = {
  batchNumber: "",
  shippingDate: "",
  deliveryMode: "",
  deliveryDate: "",
  shipmentList: [],
  shipmentItem: {},
};

const shipmentSlice = createSlice({
  name: "shipmentRecord",
  initialState,
  reducers: {
    updateShipment: (state, action) => {
      let { name, value } = action.payload;
      state[name] = value;
    },
    updateShipmentItem: (state) => {
      let num = state.shipmentList.length;
      num = num + 1;
      let itemslist = {
        name: "",
        width: "",
        height: "",
        lenght: "",
        weight: "",
      };
      let itemSet = `item${num}`;

      state.shipmentList.push(num);

      state.shipmentItem[itemSet] = itemslist;
    },
    updateShipmentItemRecord: (state, action) => {
      let { name, value, itemName } = action.payload;
      state.shipmentItem[itemName][name] = value;
    },
    deleteShipmentItem: (state, action) => {
      let { itemNumber, itemName } = action.payload;
      let itemIndex = state.shipmentList.indexOf(itemNumber);
      state.shipmentList.splice(itemIndex, 1);
      delete state.shipmentItem[itemName];
    },

    updateBatchNum: (state, action) => {
      state.batchNumber = action.payload;
    },
  },
});

const { actions, reducer } = shipmentSlice;
export const {
  updateShipment,
  updateShipmentItem,
  updateShipmentItemRecord,
  deleteShipmentItem,
  updateBatchNum,
} = actions;

export default reducer;
