import React from "react";
import { Link, useParams } from "react-router-dom";
export default function ProductDetails() {
  const parms = useParams();
  console.log(parms);
  return (
    <>
      <h1>ProductDetails {parms.productId}</h1>
      <Link to=".." relative="path">
        Go Back{" "}
      </Link>
    </>
  );
}
