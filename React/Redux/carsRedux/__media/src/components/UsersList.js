import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { addUsers, fetchUsers } from "../store";
import SkeletonLoader from "./SkeletonLoader";
import Button from "./Button";
import { useThunk } from "../store/custom-hooks/useThunk";
import UsersListItem from "./UsersListItem";
// import { unwrapResult } from "@reduxjs/toolkit";

export default function UsersList() {
  // const { error, isLoading, data } = useSelector((state) => state.users);
  const { data } = useSelector((state) => state.users);
  const {
    runThunk: userLoadingThunk,
    isLoading: isUserLoading,
    errors: fetchUsersErrors,
  } = useThunk(fetchUsers);
  // console.log(userLoadingThunk);
  const {
    runThunk: userAddingThunk,
    isLoading: isUsersAdding,
    errors: usersAddErrors,
  } = useThunk(addUsers);
  // const [isUserLoading, setIsUserLoading] = useState(false);
  // const [fetchUsersErrors, setFetchUsersErrors] = useState(null);
  // const [isUsersAdding, setIsUsersAdding] = useState(false);
  // const [usersAddErrors, setUsersAddErrors] = useState(null);

  let content;
  // const data = useSelector((state) => state);
  console.log(data);
  useEffect(() => {
    // dispatch(fetchUsers())
    //   .unwrap()
    //   .then(() => console.log("success"))
    //   .catch(() => console.log("failed"))
    // setIsUserLoading(true);
    // dispatch(fetchUsers())
    //   .unwrap()
    //   // .then((val) => console.log(val, "success"))
    //   .catch((e) => {
    //     console.log("failed", e);
    //     setFetchUsersErrors(e.message);
    //   })
    //   .finally(() => setIsUserLoading(false));

    userLoadingThunk();
  }, [userLoadingThunk]);

  function clickHandler(e) {
    console.log(e.target);
    userAddingThunk();
    // setIsUsersAdding(true);
    // dispatch(addUsers())
    //   .unwrap()
    //   .catch((e) => setUsersAddErrors(e.message))
    //   .finally(() => setIsUsersAdding(false));
  }
  if (isUserLoading) {
    content = <SkeletonLoader number={6} className="h-10 w-100" />;
  }
  if (fetchUsersErrors) {
    content = <p className="text-center display-5">{fetchUsersErrors}</p>;
  } else if (data && data.length > 0) {
    console.log("inside if");
    content = (
      <ul>
        {data.map((val) => (
          <li key={val.id}>
            <UsersListItem id={val.id} name={val.name} />
          </li>
        ))}
      </ul>
    );
    // return <p className="text-center display-5">{data[0].name}</p>;
  }
  console.log(data);

  return (
    <div className="container mx-auto ">
      <div className="d-flex justify-between mb-3 align-items-center ">
        <h1 className="h1">Users</h1>

        <Button primary onClick={clickHandler} loading={isUsersAdding}>
          Add Users
        </Button>
        {usersAddErrors && <p>{usersAddErrors}</p>}
      </div>
      {content}
    </div>
  );
}
