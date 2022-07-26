import { combineReducers } from "@reduxjs/toolkit";
import login from "./loginSlice";
import register from "./registerSlice";

const authReducers = combineReducers({
  login,
  register,
});

export default authReducers;
