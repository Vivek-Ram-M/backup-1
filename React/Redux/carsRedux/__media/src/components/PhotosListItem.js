import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { useRemovePhotosMutation } from "../store";

export default function PhotosListItem({ url, id }) {
  const [removePhotos] = useRemovePhotosMutation();
  console.log(id);
  function removePhotosHandler() {
    removePhotos(id);
    // console.log("inside photo button");
  }
  return (
    <div className="relative cursor-pointer m-2">
      <img src={url} alt="Random" />
      <div
        className="absolute inset-0 d-flex justify-center align-items-center opacity-0  hover:bg-gray-200  hover:opacity-50"
        onClick={removePhotosHandler}
      >
        <AiFillDelete className="text-3xl" />
      </div>
    </div>
  );
}
