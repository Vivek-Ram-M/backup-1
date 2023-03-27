import React, { Suspense } from "react";
import {
  Await,
  defer,
  json,
  redirect,
  useLoaderData,
  useParams,
  useRouteLoaderData,
} from "react-router-dom";
import EventItem from "./EventItem";
import axios from "axios";
import EventsList from "./EventsList";
export default function EventDetailPage() {
  const params = useParams();
  const { event, events } = useRouteLoaderData("event");
  // const events = useLoaderData();
  console.log(events, params);

  return (
    <>
      <Suspense
        fallback={
          <p style={{ backgroundColor: "red", textAlign: "center" }}>
            Loading....
          </p>
        }
      >
        <Await resolve={event}>
          {(data) => <EventItem eventData={data} />}
        </Await>
      </Suspense>

      <Suspense
        fallback={
          <p style={{ backgroundColor: "red", textAlign: "center" }}>
            Loading....
          </p>
        }
      >
        <Await resolve={events}>
          <EventsList />
        </Await>
      </Suspense>
    </>
  );
}

export async function eventDetailsLoader({ request, params }) {
  // console.log(request, params);
  // const response = await fetch("http://localhost:8080/events/" + params.id);
  // if (!response.ok) {
  //   throw json(
  //     { message: "Could not fetch the details of the event" },
  //     { status: 500 }
  //   );
  // } else return response;
  // // return fetch("http://localhost:8080/events/" + params.id);
  return defer({
    event: await eventLoader(params.id),
    events: eventsLoader(),
  });
}
async function eventLoader(id) {
  // console.log(request, params);
  const response = await fetch("http://localhost:8080/events/" + id);
  if (!response.ok) {
    throw json(
      { message: "Could not fetch the details of the event" },
      { status: 500 }
    );
  } else {
    const resData = await response.json();
    return resData.event;
  }
}
async function eventsLoader(o) {
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
export async function eventDeleteAction({ params, request }) {
  console.log(params, request.method);
  try {
    const res = await axios.delete("http://localhost:8080/events/" + params.id);
  } catch {
    throw json({ message: "cannot delete event" }, { status: 500 });
  }
  // console.log(res);
  return redirect("/events");
}
