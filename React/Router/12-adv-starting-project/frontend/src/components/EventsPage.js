// import { useEffect, useState } from "react";

import { Suspense } from "react";
import {
  json,
  Outlet,
  useLoaderData,
  Link,
  defer,
  Await,
} from "react-router-dom";
import EventsList from "../components/EventsList";

function EventsPage() {
  const { events } = useLoaderData();
  console.log(events);
  // const [isLoading, setIsLoading] = useState(false);
  // const [fetchedEvents, setFetchedEvents] = useState();
  // const [error, setError] = useState();

  // useEffect(() => {
  //   async function fetchEvents() {
  //     setIsLoading(true);
  //     const response = await fetch("http://localhost:8080/events");

  //     if (!response.ok) {
  //       setError("Fetching events failed.");
  //     } else {
  //       const resData = await response.json();
  //       setFetchedEvents(resData.events);
  //     }
  //     setIsLoading(false);
  //   }

  //   fetchEvents();
  // }, []);
  console.log("inside component");

  let content = <p>{events.message}</p>;
  if (!events.error) {
    console.log("hey");
    content = (
      <Suspense fallback={<p>loading...</p>}>
        <Await resolve={events}>
          <EventsList />
        </Await>
      </Suspense>
    );
  }

  return (
    // console.log();
    <>
      <Link to="new">New Events</Link>
      <div style={{ textAlign: "center" }}>
        {/* {isLoading && <p>Loading...</p>} */}
        {/* {error && <p>{error}</p>} */}
      </div>
      {content}
      {/* <Outlet /> */}
    </>
  );
}

export default EventsPage;

async function loader(o) {
  console.log("inside Loader", o);
  const response = await fetch("http://localhost:8080/events");
  console.log(response);

  if (!response.ok) {
    let i;

    fetch(new Response("g"))
      .then((val) => {
        console.log(val);
        return val.body.toString();
      })
      .then((res) => {
        i = res;
        console.log(res);
      });

    console.log(i);
    ///////////
    // return { error: true, message: "Something Went wrong" };
    // throw new Response(JSON.stringify({ message: "Could not fetch events" }), {
    //   status: 500,
    // });
    throw json(
      { message: "Could not fetch events" },
      {
        status: 500,
      }
    );
  } else {
    // return response;
    const resData = await response.json();
    console.log(resData);
    return resData.events;
  }
}
export function eventsLoader() {
  return defer({ events: loader() });
}
// import React from "react";
// import { Link, NavLink, Outlet } from "react-router-dom";
// export default function EventsPage() {
//   const EVENTS = [
//     { id: "e1", title: "Event-1" },
//     { id: "e2", title: "Event-2" },
//     { id: "e3", title: "Event-3" },
//   ];
//   return (
//     <>
//       <h1>EventsPage</h1>
//       <nav>
//         <h2>NavBar</h2>
//         <ul>
//           <li>
//             <NavLink to={`id`}>EventDetailPages</NavLink>
//           </li>
//           <li>
//             <NavLink to={`new`}>NewEventPages</NavLink>
//           </li>
//           <li>
//             <NavLink to={`id/edit`}>EditEventPage</NavLink>
//           </li>
//         </ul>
//       </nav>
//       <ul>
//         {EVENTS.map((val) => {
//           return (
//             <li key={val.id}>
//               <Link to={`${val.id}`}>{val.title}</Link>
//             </li>
//           );
//         })}
//       </ul>
//       <Outlet />
//     </>
//   );
// }
