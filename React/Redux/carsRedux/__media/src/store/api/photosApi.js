import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { faker } from "@faker-js/faker";

export const photosApi = createApi({
  reducerPath: "photos",
  tagTypes: ["Photos", "AlbumPhoto"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3005",
  }),
  endpoints: (builder) => ({
    fetchPhotos: builder.query({
      providesTags: (res, err, album) => {
        const totalTags = res.map((val) => ({ type: "Photos", id: val.id }));
        if (album.id) {
          totalTags.push({ type: "AlbumPhoto", id: album.id });
        }
        console.log(totalTags);
        return totalTags;
      },
      query: (album) => {
        return {
          url: "/photos",
          params: {
            albumId: album.id,
          },
          method: "GET",
        };
      },
    }),
    addPhotos: builder.mutation({
      invalidatesTags: (res, err, arg) => {
        return [{ type: "AlbumPhoto", id: arg.id }];
      },
      query: (albums) => {
        return {
          url: "/photos",
          method: "POST",
          body: {
            albumId: albums.id,
            url: faker.image.abstract(150, 150, true),
          },
        };
      },
    }),
    removePhotos: builder.mutation({
      invalidatesTags: (res, err, arg) => {
        console.log(arg);
        return [{ type: "Photos", id: arg }];
      },
      query: (id) => {
        return {
          url: `/photos/${id}`,
          method: "DELETE",
        };
      },
    }),
  }),
});

export const {
  useFetchPhotosQuery,
  useAddPhotosMutation,
  useRemovePhotosMutation,
} = photosApi;
