import { Link, useSubmit } from "react-router-dom";
import classes from "./EventItem.module.css";

function EventItem({ eventData: event }) {
  console.log(event);
  const submit = useSubmit();
  function startDeleteHandler() {
    const prompt = window.confirm("are you sure");
    if (prompt) {
      submit(null, { method: "delete" });
    }
  }
  console.log(event);

  return (
    <article className={classes.event}>
      <img src={event.image} alt={event.title} />
      <h1>{event.title}</h1>
      <time>{event.date}</time>
      <p>{event.description}</p>
      <menu className={classes.actions}>
        <Link to="edit">Edit</Link>
        <button onClick={startDeleteHandler}>Delete</button>
      </menu>
    </article>
  );
}

export default EventItem;
