"use client";
import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  register: {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  },

  login: {
    email: "",
    password: "",
  },
};

const authSlice = createSlice({
  name: "authDetail",
  initialState,
  reducers: {
    updateRegDetails: (state, action) => {
      let { name, value } = action.payload;
      state.register[name] = value;
    },

    updateLoginDetails: (state, action) => {
      let { name, value } = action.payload;
      state.login[name] = value;
    },
  },
});

const { actions, reducer } = authSlice;
export const { updateRegDetails, updateLoginDetails } = actions;

export default reducer;
