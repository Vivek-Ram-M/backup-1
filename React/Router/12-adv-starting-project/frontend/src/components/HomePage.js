import React from "react";
import { useNavigation } from "react-router-dom";

export default function HomePage() {
  const navigation = useNavigation();
  console.log(navigation);

  function dummyFunction() {
    const prompt = window.confirm("Are you are sure");
    console.log(prompt);
  }
  return (
    <>
      {navigation.state === "loading" && <p>Loading</p>}
      <h1>HomePage</h1>
      <button onClick={dummyFunction}>click me</button>
    </>
  );
}
