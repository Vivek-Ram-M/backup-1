import React from "react";
import { useAddAlbumMutation, useFetchAlbumsQuery } from "../store";
// import ExpandablePanel from "./ExpandablePanel";
import SkeletonLoader from "./SkeletonLoader";
import Button from "./Button";
import AlbumsListItem from "./AlbumsListItem";
export default function AlbumsList(props) {
  // const data = useFetchAlbumsQuery(props.id);
  const { data, isLoading, error, isSuccess, isFetching } = useFetchAlbumsQuery(
    props.id
  );
  const [addAlbum, results] = useAddAlbumMutation();
  // const results = useAddAlbumMutation();
  let content;
  console.log(props.id, results);
  useFetchAlbumsQuery(props.id);

  async function addAlbumsHandler() {
    addAlbum(props.id);
  }

  if (isFetching) {
    content = <SkeletonLoader number={4} className="h-10 w-100" />;
  } else if (error) {
    content = <p className="text-danger">Error fetching albums</p>;
  } else {
    content = (
      <ul>
        {data.map((val) => {
          return <AlbumsListItem albums={val} key={val.id} />;
        })}
      </ul>
    );
  }

  console.log(data, isLoading, error, isSuccess, isFetching);
  return (
    <>
      <div className="d-flex align-items-center justify-between mb-3">
        <p className=" h4 ">Albums by {props.name} </p>
        <Button primary onClick={addAlbumsHandler} loading={results.isLoading}>
          {" "}
          Add Album
        </Button>
      </div>
      {content}
    </>
  );
}
