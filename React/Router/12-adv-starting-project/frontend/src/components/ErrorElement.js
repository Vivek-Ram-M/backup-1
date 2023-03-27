import React from "react";
import { useRouteError } from "react-router-dom";

export default function ErrorElement() {
  const error = useRouteError();
  // console.log(error.data.message);
  // console.log(JSON.parse(error.data).message, error.status);
  console.log(error);
  if (error.status === 500) {
    // let title = JSON.parse(error.data).message;
    console.log("inside 500");
    // return <h1>{title}</h1>;
  }

  if (error.status === 404) {
    return <h1> Page not found</h1>;
  }
}
