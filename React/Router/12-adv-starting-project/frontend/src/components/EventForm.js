import {
  useNavigate,
  useNavigation,
  Form,
  useActionData,
  redirect,
  json,
} from "react-router-dom";

import classes from "./EventForm.module.css";

function EventForm({ method, event }) {
  const navigate = useNavigate();
  const data = useActionData();

  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  console.log(navigation, data);

  function cancelHandler() {
    navigate("..");
  }

  return (
    <Form method={method} className={classes.form}>
      {data && data.errors && <p>{Object.values(data.errors)}</p>}
      <p>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          name="title"
          // required
          defaultValue={event && event.title}
        />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input
          id="image"
          type="url"
          name="image"
          // required
          defaultValue={event && event.image}
        />
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          name="date"
          // required
          defaultValue={event && event.date}
        />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows="5"
          // required
          defaultValue={event && event.description}
        />
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler} disabled={isSubmitting}>
          Cancel
        </button>
        <button disabled={isSubmitting}>
          {isSubmitting ? "Submitting...." : "Save"}
        </button>
      </div>
    </Form>
  );
}

export default EventForm;
///////////////////////

export async function eventsFormAction({ request, params }) {
  const res = await request.formData();
  // console.log(res  );
  const data = {
    title: res.get("title"),
    image: res.get("image"),
    date: res.get("date"),
    description: res.get("description"),
  };
  let url = "http://localhost:8080/events";
  if (request.method === "PATCH") {
    url = "http://localhost:8080/events/" + params.id;
  }

  const response = await fetch(url, {
    method: request.method,
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(data),
  });
  console.log(response);
  if (response.status === 422) {
    return response;
  }
  if (!response.ok) {
    return json(
      { message: "Could not submit the form for the new events" },
      {
        status: 500,
      }
    );
  }
  console.log(res, data, redirect("/events"));
  return redirect("/events");
}
