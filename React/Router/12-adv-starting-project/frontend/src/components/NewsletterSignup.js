import { useFetcher, Form } from "react-router-dom";
import classes from "./NewsletterSignup.module.css";
import { useEffect } from "react";

function NewsletterSignup() {
  const fetcher = useFetcher();
  const { state, data } = fetcher;

  useEffect(() => {
    console.log(state, data);
    if (state === "idle" && data && data.message) {
      window.alert(data.message);
    }
  }, [state, data]);
  console.log(fetcher);

  return (
    <fetcher.Form
      method="post"
      action="/newsletter"
      className={classes.newsletter}
    >
      <input
        type="email"
        placeholder="Sign up for newsletter..."
        aria-label="Sign up for newsletter"
      />
      <button>Sign up</button>
    </fetcher.Form>
  );
}

export default NewsletterSignup;
