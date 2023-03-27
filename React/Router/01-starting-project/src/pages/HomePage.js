import React, { Component } from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigateToProduct = useNavigate();
  function clickHandler() {
    navigateToProduct("/products");
    // redirect("/products");
    // console.log(redirect("/products"));
  }
  return (
    <>
      <h1>HomePage routed via routed</h1>
      <button onClick={clickHandler}>To Product </button>
      <ExplainBindingsComponent></ExplainBindingsComponent>
    </>
  );
}
class ExplainBindingsComponent extends Component {
  onClickMe = function () {
    console.log(this);
  };
  render() {
    return (
      <button onClick={this.onClickMe} type="button">
        Click Me
      </button>
    );
  }
}
