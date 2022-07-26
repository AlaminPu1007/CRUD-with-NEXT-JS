import { combineReducers } from "@reduxjs/toolkit";
// eslint-disable-next-line import/no-cycle
import auth from "../auth";

const createReducer = (asyncReducers) => (state, action) => {
  const combinedReducer = combineReducers({
    auth,
    ...asyncReducers,
  });

  /*
	Reset the redux store when user logged out
	 */
  // if (action.type === "auth/user/userLoggedOut") {
  //   // state = undefined;
  // }

  return combinedReducer(state, action);
};

export default createReducer;
