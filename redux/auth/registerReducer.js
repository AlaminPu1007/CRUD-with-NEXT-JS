// eslint-disable-next-line import/no-cycle
import { createSlice } from "@reduxjs/toolkit";
/**
 * This file is for auth register reducer
 */

const initialState = {
  success: false,
  errors: [],
};

const registerSlice = createSlice({
  name: "auth/register",
  initialState,
  reducers: {
    //our all reducer method will be defined here
  },
  extraReducers: {},
});

// exported reducer method
export const {} = registerSlice.actions;

export default registerSlice.reducer;
