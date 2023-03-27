import React from "react";
import { useThunk } from "../store/custom-hooks/useThunk";
import Button from "./Button";
import { deleteUsers } from "./../store/thunk/deleteUsers";
import { AiFillDelete } from "react-icons/ai";
import ExpandablePanel from "./ExpandablePanel";
import AlbumsList from "./AlbumsList";
// import { useDispatch } from "react-redux";
export default function UsersListItem(props) {
  const {
    runThunk: deleteUsersThunk,
    isLoading: isDeleting,
    errors,
  } = useThunk(deleteUsers);
  // const dispatch = useDispatch();

  function deleteUsersHandler() {
    deleteUsersThunk(props.id);
  }
  const content = (
    <>
      <Button loading={isDeleting} onClick={deleteUsersHandler}>
        <AiFillDelete />
      </Button>
      <p className="h2">{props.name}</p>
    </>
  );
  return (
    <ExpandablePanel id={props.id} header={content}>
      <AlbumsList name={props.name} id={props.id} />
    </ExpandablePanel>
  );
}
