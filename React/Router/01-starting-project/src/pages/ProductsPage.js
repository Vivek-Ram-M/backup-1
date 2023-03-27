import React from "react";
import { Link, Outlet, useParams } from "react-router-dom";
export default function ProductsPage() {
  const parmams = useParams();
  console.log(parmams);
  const PRODUCT = [
    {
      id: "p1",
      title: "Product-1",
    },
    { id: "p2", title: "Product-2" },
    { id: "p3", title: "Product-3" },
  ];
  return (
    <>
      <h1>ProductsPage</h1>
      <p>
        Home Page <Link to=".."> Home Page</Link>
        {/* Home Page <a href="/"> Home Page</a> */}
      </p>
      <ul>
        {PRODUCT.map((val) => {
          return (
            <li key={val.id}>
              <Link to={val.id}>{val.title}</Link>
            </li>
          );
        })}
        {/* <li>
          <Link to="/products/p-1">Product 1</Link>
        </li>
        <li>Product 1</li>
        <li>Product 1</li> */}
      </ul>
      <Outlet />
    </>
  );
}
