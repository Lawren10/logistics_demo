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

  loading: false,
};

const authSlice = createSlice({
  name: "authDetail",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
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
export const { updateRegDetails, updateLoginDetails, setLoading } = actions;

export default reducer;
