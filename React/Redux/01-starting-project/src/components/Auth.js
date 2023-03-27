import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store/auth";
import classes from "./Auth.module.css";
import UserProfile from "./UserProfile";
const Auth = () => {
  const isAuth = useSelector((state) => state.auth.isAuth);

  const dispatchAuth = useDispatch();
  function loginHandler() {
    dispatchAuth(authActions.login());
  }
  let content = (
    <main className={classes.auth}>
      <section>
        <form onSubmit={loginHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
  if (isAuth) {
    content = <UserProfile />;
  }
  return content;
};

export default Auth;
