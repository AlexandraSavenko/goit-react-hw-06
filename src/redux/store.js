import { configureStore } from "@reduxjs/toolkit";

const initialState = {
  balance: {
    value: 0,
  },
};

const rootReducer = (state = initialState, action) => {
  return state;
};

export const store = configureStore({
  reducer: rootReducer,
});
