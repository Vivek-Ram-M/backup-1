import UsersList from "./components/UsersList";
import { className } from "classnames";
// import { Button } from "bootstrap";
import Panel from "./components/Panel";
import Button from "./components/Button";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <>
      <UsersList />
      {/* <Button /> */}
      {/* <Panel /> */}
    </>
  );
}

export default App;
