/**
 * our all auth related reducer will be defined here
 */

import { combineReducers } from "@reduxjs/toolkit";
import login from "./loginReducer";
import register from "./registerReducer";

const authReducers = combineReducers({
  login,
  register,
});

export default authReducers;
