import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import NewsletterSignup from "./NewsletterSignup";
import NewsletterPage from "./../NewsletterPage";
function active({ isActive }) {
  return isActive ? classes.active : "";
}
export default function MainNavigation() {
  // const data = useLoaderData();
  // console.log(data);
  return (
    <div>
      {/* <nav className={classes.header}>
        <h1> NavBar</h1>
        <ul className={classes.list}>
          <li>
            <NavLink to="/" className={active}>
              HomePage
            </NavLink>
          </li>
          <li>
            <NavLink to="events" end className={active}>
              EventsPage
            </NavLink>
          </li>
          <li>
            <NavLink to="events/p1" end className={active}>
              EventsDetailPage
            </NavLink>
          </li>
          <li>
            <NavLink to="events/new" className={active}>
              NewEventsPage
            </NavLink>
          </li>
          <li>
            <NavLink to="events/p1/edit" className={active}>
              EventsEditPage
            </NavLink>
          </li>
        </ul>
      </nav> */}
      <nav className={classes.header}>
        <h1> NavBar</h1>

        <ul className={classes.list}>
          <li>
            <NavLink to="/" end className={active}>
              HomePage
            </NavLink>
          </li>
          <li>
            <NavLink to="events" end className={active}>
              EventsPage
            </NavLink>
          </li>
          <li>
            <NavLink to="newsletter" end className={active}>
              NewsletterPage
            </NavLink>
          </li>
        </ul>
        <NewsletterSignup />
      </nav>

      <Outlet />
    </div>
  );
}
