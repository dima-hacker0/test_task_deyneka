import { combineReducers, createStore } from "@reduxjs/toolkit";
import mainReducer from "./main_reducer/main_reducer";

export const rootReducer = combineReducers({
  currency: mainReducer,
});

export const store = createStore(rootReducer);
