import { combineReducers, createStore } from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
  currency: currencyReducer,
});

export const store = createStore(rootReducer);
