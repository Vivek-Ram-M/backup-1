import { createSlice, nanoid } from "@reduxjs/toolkit";

const carsSlice = createSlice({
  name: "carsSlice",
  initialState: {
    search: "",
    data: [],
  },
  reducers: {
    changeSearchName(state, action) {
      state.search = action.payload;
    },
    addCars(state, action) {
      // * Assuming that the payload will be object of name and cost

      state.data.push({
        name: action.payload.name,
        cost: action.payload.cost,
        id: nanoid(),
      });
    },
    removeCars(state, action) {
      // * Assuming that the payload will be the identifier
      const filteredArray = state.data.filter(
        (val) => val.id !== action.payload
      );
      state.data = filteredArray;
    },
  },
});

export const carsAction = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
