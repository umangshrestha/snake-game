import { configureStore } from "@reduxjs/toolkit";
import snakeReducer from "./store.slice";

export const store = configureStore({
  reducer: {
    snake: snakeReducer,
  },
});
