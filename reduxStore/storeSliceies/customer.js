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

const customerSlice = createSlice({
  name: "customerRecord",
  initialState,
  reducers: {
    updateCustomersDetails: (state, action) => {
      // console.log(state)
      console.log(action.payload);
    },
  },
});

const { actions, reducer } = customerSlice;
export const { updateCustomersDetails } = actions;

export default reducer;
