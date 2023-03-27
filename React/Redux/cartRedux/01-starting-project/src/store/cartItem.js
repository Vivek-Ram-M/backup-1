import { createSlice } from "@reduxjs/toolkit";
// import axios from "axios";
// import { toggleAction } from "./cartToggle";

const initialCartState = {
  productItems: [
    {
      title: "Test Item 1",
      quantity: 1,
      total: 6,
      price: 6,
      description: "This is the first test product",
    },
    {
      title: "Test Item 2",
      quantity: 1,
      total: 8,
      price: 8,
      description: "This is the second test product",
    },
  ],
  cartItems: [],
  changed: false,
  total: 0,
};
const cartSlice = createSlice({
  name: "cartItems",
  initialState: initialCartState,
  reducers: {
    replaceCartItems(state, action) {
      state.cartItems = action.payload.cartItems;
    },
    addToCart(state, action) {
      const { payload: item } = action;
      state.changed = true;
      const existingItem = findExistingItem(state, action);
      // console.log(existingItem);
      if (!existingItem) {
        state.cartItems.push({
          title: item.title,
          price: item.price,
          quantity: 1,
          total: item.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.total = existingItem.quantity * existingItem.price;

        // state.cartItems[existingItemIndex].quantity =
        //   state.cartItems[existingItemIndex].quantity + 1;
        // state.cartItems[existingItemIndex].total = state.cartItems[existingItemIndex]
      }
    },
    cartItemDeletion(state, action) {
      const existingItem = findExistingItem(state, action);
      state.changed = true;

      if (existingItem.quantity === 1) {
        console.log(
          state.cartItems.filter((val) => {
            console.log(val.title, existingItem.title);
            return val.title !== existingItem.title;
          })
        );
        state.cartItems = state.cartItems.filter((val) => {
          console.log(val.title, existingItem.title);
          return val.title !== existingItem.title;
        });
      } else {
        existingItem.quantity--;
        existingItem.total = existingItem.quantity * existingItem.price;
      }
    },
  },
});

export const cartAction = cartSlice.actions;
export const cartReducer = cartSlice.reducer;

// if (module.hot) {
//   module.hot.accept();
// }

function findExistingItem(state, action) {
  const { payload: item } = action;
  console.log(state.cartItems.length, item);
  return state.cartItems.find((val) => val.title === item.title);
}
