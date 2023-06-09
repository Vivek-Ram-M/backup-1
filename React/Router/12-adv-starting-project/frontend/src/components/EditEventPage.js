import React from "react";
import { useRouteLoaderData } from "react-router-dom";
import EventForm from "./EventForm";

export default function EditEventPage() {
  const data = useRouteLoaderData("event");

  return <EventForm event={data.event} method="PATCH" />;
}
