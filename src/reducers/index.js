import { combineReducers } from "@reduxjs/toolkit";
import filesReducer from "./filesReducer";

const rootReducer = combineReducers({
  files: filesReducer,
});

export default rootReducer;
