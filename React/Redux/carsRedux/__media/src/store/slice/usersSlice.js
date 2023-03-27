import { createSlice } from "@reduxjs/toolkit";
import { deleteUsers } from "../thunk/deleteUsers";
import { fetchUsers } from "./../index";
// import { fetchUsers } from "./../thunk/fetchUsers";
import { addUsers } from "./../thunk/addUsers";
export const usersSlice = createSlice({
  name: "users",
  initialState: {
    data: [],
    isLoading: false,
    error: "",
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchUsers.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      console.log(action);
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      console.log(action);
      state.isLoading = false;
      state.error = action.error.message;
    });
    builder.addCase(addUsers.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(addUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data.push(action.payload);
    });
    builder.addCase(addUsers.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
    builder.addCase(deleteUsers.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(deleteUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      // console.log(action.payload);
      state.data = state.data.filter((val) => val.id !== action.payload);
    });
    builder.addCase(deleteUsers.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export const usersAction = usersSlice.actions;
export const usersReducer = usersSlice.reducer;
