"use client";
import { createSlice } from "@reduxjs/toolkit";
let initialState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  Address: {
    aptNo: "",
    street: "",
    city: "",
    state: "",
  },
};

const receiverSlice = createSlice({
  name: "receiverRecord",
  initialState,
  reducers: {
    updateReceiverDetails: (state, action) => {
      let { name, Address, value } = action.payload;
      if (Address === true) {
        state.Address[name] = value;
      } else {
        state[name] = value;
      }
    },
    resetReceiversDetails: (state) => {
      state.firstName = "";
      state.lastName = "";
      state.email = "";
      state.phone = "";
      state.Address.aptNo = "";
      state.Address.street = "";
      state.Address.city = "";
      state.Address.state = "";
    },
  },
});

const { actions, reducer } = receiverSlice;
export const { updateReceiverDetails, resetReceiversDetails } = actions;

export default reducer;
