import React from "react";
import { useAddPhotosMutation, useFetchPhotosQuery } from "../store";
import SkeletonLoader from "./SkeletonLoader";
import PhotosListItem from "./PhotosListItem";
import Button from "./Button";

export default function PhotosList({ albums }) {
  const { data, isFetching, error } = useFetchPhotosQuery(albums);
  const [addPhotos, photosResults] = useAddPhotosMutation();
  let content;

  function addPhotosHandler() {
    addPhotos(albums);
  }
  if (isFetching) {
    content = <SkeletonLoader className="w-100 h-10" number={3} />;
  } else if (error) {
    content = <p className="text-danger">Error Fetching Photos</p>;
  } else {
    content = data.map((val) => (
      <PhotosListItem key={val.id} url={val.url} id={val.id} />
    ));
  }

  return (
    <>
      <div className="d-flex align-items-center justify-content-between">
        <h6 className="h6">Photos in {albums.title}</h6>
        <Button primary onClick={addPhotosHandler}>
          Add Photos+
        </Button>
      </div>
      <div className="d-flex flex-wrap justify-center">{content}</div>
    </>
  );
}
