// eslint-disable-next-line import/no-cycle
/**
 * This file is for auth login reducer
 */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  success: false,
  errors: [],
  loading: false,
};

const loginSlice = createSlice({
  name: "auth/login",
  initialState,
  reducers: {
    //our all reducer method will be defined here
  },
  extraReducers: {},
});
// exported reducer method
export const {} = loginSlice.actions;

export default loginSlice.reducer;
