import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { faker } from "@faker-js/faker/locale/de";
//! dev only
function pause(dura) {
  return new Promise((resolve) => setTimeout(resolve, dura));
}
export const albumsApi = createApi({
  reducerPath: "albums",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3005",
    fetchFn: async (...args) => {
      await pause(1000);
      // console.log(args);
      return fetch(...args);
    },
  }),
  tagTypes: ["albums", "userAlbums"],
  endpoints: (builder) => ({
    fetchAlbums: builder.query({
      providesTags: (res, err, arg) => {
        // console.log(res, err, arg);
        const tagsArr = res.map((val) => {
          return { type: "albums", id: val.id };
        });
        if (arg) {
          tagsArr.push({ type: "userAlbums", id: arg });
        }
        console.log(tagsArr);
        return tagsArr;
      },
      query: (user) => {
        return {
          url: "/albums",
          params: {
            userId: user,
          },
          method: "GET",
        };
      },
    }),
    addAlbum: builder.mutation({
      invalidatesTags: (res, err, arg) => {
        console.log(res, err, arg);
        return [{ type: "userAlbums", id: arg.id }];
      },
      query: (user) => {
        return {
          url: "/albums",
          method: "POST",
          body: {
            userId: user,
            title: faker.commerce.productName(), // 'Incredible Soft Gloves'
          },
        };
      },
    }),

    removeAlbum: builder.mutation({
      query: (albums) => {
        return {
          url: `/albums/${albums.id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: (res, err, arg) => {
        console.log(arg); // return [{ type: "albums", id: arg }];
        return [{ type: "albums", id: arg.id }];
      },
    }),
  }),
});
export const {
  useFetchAlbumsQuery,
  useAddAlbumMutation,
  useRemoveAlbumMutation,
} = albumsApi;
