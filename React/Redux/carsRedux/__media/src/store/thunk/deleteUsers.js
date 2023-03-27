import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const deleteUsers = createAsyncThunk("users/delete", async (id, api) => {
  console.log(id, api, api.getState());
  await axios.delete(`http://localhost:3005/users/${id}`);
  return id;
});
