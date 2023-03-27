import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./cartItem";
import { toggleReducer } from "./cartToggle";

const store = configureStore({
  reducer: {
    toggle: toggleReducer,
    cartItem: cartReducer,
  },
});

export default store;
