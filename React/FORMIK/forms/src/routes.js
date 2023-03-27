import { Profiler } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FormOne from "./components/formOne";
import FormThree from "./components/formThree";
import FormTwo from "./components/formTwo";

import Header from "./components/header";

const App = () => {
  function callback(
    id,
    phase,
    actualDuration,
    baseDuration,
    startTime,
    commitTime,
    interaction
  ) {
    console.log(
      id,
      phase,
      actualDuration,
      baseDuration,
      startTime,
      commitTime,
      interaction
    );
  }
  return (
    <BrowserRouter>
      <Profiler id="dummyProfiler" onRender={callback}>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<FormOne />}></Route>
            <Route path="/formtwo" element={<FormTwo />}></Route>
            <Route path="/formThree" element={<FormThree />}></Route>
          </Routes>
        </div>
      </Profiler>
    </BrowserRouter>
  );
};

export default App;
