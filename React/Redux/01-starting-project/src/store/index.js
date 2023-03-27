import { configureStore } from "@reduxjs/toolkit";
// import { createStore } from "redux";
import { authSliceReducer } from "./auth";
import { counterSliceReducer } from "./counter";
console.log(counterSliceReducer);
// console.log(counterSlice);
// function counterReducer(state = initialState, action) {
//   if (action.type === "increment") {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "decrement") {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "increase") {
//     return {
//       counter: state.counter + action.value,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "toggleCounter") {
//     return {
//       counter: state.counter,
//       showCounter: !state.showCounter,
//     };
//   }
//   return {
//     counter: state.counter,
//     showCounter: state.showCounter,
//   };
// }

// const store = createStore(counterReducer);
const store = configureStore({
  reducer: {
    counter: counterSliceReducer,
    auth: authSliceReducer,
  },
});

// console.log(counterActions, authActions, store);

export default store;
