import { useEffect, useState } from "react";
import { Form, useSearchParams, Link } from "react-router-dom";

import classes from "./AuthForm.module.css";

function AuthForm() {
  const [params, setParams] = useSearchParams();
  const isLogin = params.get("mode") === "login";
  // const isAdmin = 6;

  useEffect(() => {
    console.log("inside effect");
    setParams("noparams=iop");
  }, []);
  console.log(params.get("noparams"));
  // const [isLogin, setIsLogin] = useState(true);

  // function switchAuthHandler() {
  //   setIsLogin((isCurrentlyLogin) => !isCurrentlyLogin);
  // }

  return (
    <>
      <Form method="post" className={classes.form}>
        <h1>{isLogin ? "Log in" : "Create a new user"}</h1>
        <p>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required />
        </p>
        <p>
          <label htmlFor="image">Password</label>
          <input id="password" type="password" name="password" required />
        </p>
        <div className={classes.actions}>
          <Link to={`?mode=${isLogin ? "signup" : "login"}`}>
            {isLogin ? "Create new user" : "Login"}
          </Link>
          <button>Save</button>
        </div>
      </Form>
    </>
  );
}

export default AuthForm;
