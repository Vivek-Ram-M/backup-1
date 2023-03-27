import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk("users/fetch", async (s) => {
  // console.log(s);

  const res = await axios("http://localhost:3005/users");
  console.log(res.data);
  //! Dev only
  await pause(1000);
  return res.data;
});

//! Dev only
function pause(duration) {
  return new Promise((resolve) => {
    // console.log(resolve);
    setTimeout(resolve, duration);
  });
}
