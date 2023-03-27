import React from "react";
// import { json, redirect, useLoaderData } from "react-router-dom";
import EventForm from "./EventForm";

export default function NewEventPage() {
  // const data = useLoaderData();
  // console.log(data);
  return <EventForm method="POST" />;
}
