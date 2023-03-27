import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { useRemoveAlbumMutation } from "../store";
import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";
import PhotosList from "./PhotosList";

export default function AlbumsListItem({ albums }) {
  const [removeAlbums, results] = useRemoveAlbumMutation();
  console.log(results.isLoading);
  function removeAlbumsHandler() {
    removeAlbums(albums);
  }
  const header = (
    <>
      <Button onClick={removeAlbumsHandler} loading={results.isLoading}>
        <AiFillDelete />
      </Button>
      <p className="h5">{albums.title}</p>
    </>
  );
  return (
    <li key={albums.id}>
      <ExpandablePanel header={header}>
        <PhotosList albums={albums} />
      </ExpandablePanel>
    </li>
  );
}
