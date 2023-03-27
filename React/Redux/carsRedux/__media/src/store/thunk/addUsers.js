import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import { faker } from "@faker-js/faker";
import { faker } from "@faker-js/faker";
// import { faker } from "@faker-js/faker/locale/de";
export const addUsers = createAsyncThunk("users/add", async () => {
  const res = await axios.post("http://localhost:3005/users", {
    name: faker.name.fullName(),
  });
  console.log(res.data);
  return res.data;
});
