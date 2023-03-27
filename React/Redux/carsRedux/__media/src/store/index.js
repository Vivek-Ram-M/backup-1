import { configureStore } from "@reduxjs/toolkit";
import { usersReducer, usersAction } from "./slice/usersSlice";
import { albumsApi } from "./api/albumsApi";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { photosApi } from "./api/photosApi";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    [albumsApi.reducerPath]: albumsApi.reducer,
    [photosApi.reducerPath]: photosApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(albumsApi.middleware)
      .concat(photosApi.middleware);
  },
});

setupListeners(store.dispatch);

export { usersAction };
export * from "./thunk/fetchUsers";
export * from "./thunk/addUsers";
export * from "./thunk/deleteUsers";
export * from "../store/api/albumsApi";
export * from "./api/photosApi";
