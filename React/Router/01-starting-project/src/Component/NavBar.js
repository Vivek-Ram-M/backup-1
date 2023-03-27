import React from "react";
import classes from "./NavBar.module.css";
import { NavLink, Outlet } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <div className={classes.navbar}>
        <h1> NavBar </h1>
        <ul className={classes.navlist}>
          <li className={classes.listitem}>
            <NavLink
              to="/root"
              // relative="path"
              className={({ isActive }) => {
                console.log(isActive);
                return `${classes.link} ${isActive ? classes.active : ""}`;
              }}
              // end
            >
              Home{" "}
            </NavLink>
          </li>
          <li className={classes.listitem}>
            <NavLink
              to="products"
              className={({ isActive }) => {
                console.log(isActive);
                return `${classes.link} ${isActive ? classes.active : ""}`;
              }}
              // end
            >
              Product
            </NavLink>
          </li>
        </ul>
      </div>
      {/* <a href="#">dummy Link</a> */}
      <Outlet />
    </>
  );
}
