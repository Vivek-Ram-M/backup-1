import { createSlice } from "@reduxjs/toolkit";
import { carsAction } from "./carsSlice";

const carsFormSlice = createSlice({
  name: "carsFormSlice",
  initialState: {
    cost: 0,
    name: "",
  },
  reducers: {
    changeName(state, action) {
      state.name = action.payload;
    },
    changeCost(state, action) {
      state.cost = action.payload;
    },
  },
  extraReducers(builder) {
    console.log(carsAction.addCars);
    builder.addCase(carsAction.addCars, (state, action) => {
      state.cost = 0;
      state.name = "";
    });
  },
});

export const carsFormAction = carsFormSlice.actions;
export const carsFormReducer = carsFormSlice.reducer;
