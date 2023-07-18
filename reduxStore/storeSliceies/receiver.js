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
  },
});

const { actions, reducer } = receiverSlice;
export const { updateReceiverDetails } = actions;

export default reducer;
