import { useState } from "react";

export default function useInput(validationFunction) {
  const [enteredValue, setEnteredValue] = useState("");
  const [enteredValueIsTouched, setEnteredValueIsTouched] = useState(false);
  const enteredValueIsValid = validationFunction(enteredValue);
  const hasError = enteredValueIsTouched && !enteredValueIsValid;
  function valueInputBlurHandler() {
    setEnteredValueIsTouched(true);
  }
  function valueInputChangeHandler(e) {
    setEnteredValue(e.target.value);
  }
  function reset() {
    setEnteredValue("");
    setEnteredValueIsTouched(false);
  }
  return {
    enteredValue,
    enteredValueIsTouched,
    enteredValueIsValid,
    hasError,
    valueInputBlurHandler,
    valueInputChangeHandler,
    reset,
  };
}
