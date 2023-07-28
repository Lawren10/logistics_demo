"use client";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
let initialState = {
  id: "",
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
  exists: false,
};

export const getSingleCustomer = createAsyncThunk(
  "customerRecord/getCutomer",
  async (param, thunkApi) => {
    let res = await axios.post("/api/customerRecord/getCustomers", param);
    return res.data;
  }
);

const customerSlice = createSlice({
  name: "customerRecord",
  initialState,
  reducers: {
    updateCustomersDetails: (state, action) => {
      let { name, Address, value } = action.payload;
      if (Address === true) {
        state.Address[name] = value;
      } else {
        state[name] = value;
      }
    },

    persistsCustomer: (state, action) => {
      state.id = action.payload;
      state.exists = true;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getSingleCustomer.fulfilled, (state, action) => {
      let data = action.payload;
      if (data) {
        let address = data.address;
        address = address.split(",");

        state.id = data.id;
        state.firstName = data.firstName;
        state.lastName = data.lastName;
        state.email = data.email;
        state.phone = data.phone;
        state.Address.aptNo = address[0];
        state.Address.street = address[1];
        state.Address.city = address[2];
        state.Address.state = address[3];
        state.exists = true;
      }
    });
  },
});

const { actions, reducer } = customerSlice;
export const { updateCustomersDetails, persistsCustomer } = actions;

export default reducer;
