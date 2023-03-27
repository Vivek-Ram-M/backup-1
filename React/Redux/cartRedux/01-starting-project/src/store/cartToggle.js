import { createSlice } from "@reduxjs/toolkit";

const toggleSlice = createSlice({
  name: "cartToggler",
  initialState: { isCartOpen: true, notification: {} },
  reducers: {
    toggleCart(state) {
      state.isCartOpen = !state.isCartOpen;
    },
    changeNotificationStatus(state, action) {
      console.log(action.payload);
      state.notification.status = action.payload.status;
      state.notification.title = action.payload.title;
      state.notification.message = action.payload.message;
    },
  },
});

export const toggleAction = toggleSlice.actions;
export const toggleReducer = toggleSlice.reducer;
