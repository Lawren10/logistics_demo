import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
let initialState = {
  customerList: [],
  loading: true,
};

export const getAllCustomer = createAsyncThunk(
  "customerList/getAllCutomers",
  async () => {
    let res = await axios.get("/api/customerRecord/getCustomers");
    // console.log("from fetching :", res.data);
    return res.data;
  }
);

const customerListSLice = createSlice({
  name: "customerList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllCustomer.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllCustomer.fulfilled, (state, action) => {
      state.customerList = action.payload;
      state.loading = false;
    });
    builder.addCase(getAllCustomer.rejected, (state) => {
      state.customerList = "server error";
      state.loading = false;
    });
  },
});

const { actions, reducer } = customerListSLice;
export const {} = actions;

export default reducer;
