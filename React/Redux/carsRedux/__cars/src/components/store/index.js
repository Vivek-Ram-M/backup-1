import { configureStore } from "@reduxjs/toolkit";
import { carsFormReducer, carsFormAction } from "./slice/carsFormSlice";
import { carsAction, carsReducer } from "./slice/carsSlice";

const store = configureStore({
  reducer: {
    cars: carsReducer,
    carsForm: carsFormReducer,
  },
});
console.log(store, store.getState());
export { carsAction, carsFormAction, store };
