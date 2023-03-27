import { useReducer } from "react";
const init = {
  value: "",
  isTouched: false,
};
function reducerFunction(state, action) {
  if (action.type === "INPUT_VALUE_BLUR") return { ...state, isTouched: true };
  if (action.type === "INPUT_VALUE_SET")
    return { ...state, value: action.value };
  if (action.type === "INPUT_VALUE_RESET")
    return { value: "", isTouched: false };
  return init;
}

export default function useInputSelf(validationFunction) {
  const [reducerState, dispatch] = useReducer(reducerFunction, init);
  // const [enteredValue, setEnteredValue] = useState("");
  // const [isValueTouched, setIsValueTouched] = useState(false);
  const isValid = validationFunction(reducerState.value);
  const hasError = !isValid && reducerState.isTouched;
  function inputValueBlurHandler() {
    // setIsValueTouched(true);
    dispatch({
      type: "INPUT_VALUE_BLUR",
    });
  }
  function inputValueChangeHandler(e) {
    // setEnteredValue(e.target.value);
    dispatch({ type: "INPUT_VALUE_SET", value: e.target.value });
  }
  function resetInput() {
    dispatch({
      type: "INPUT_VALUE_RESET",
    });
  }
  // setEnteredValue("");
  // setIsValueTouched(false);

  return {
    enteredValue: reducerState.value,
    isValid,
    hasError,
    inputValueBlurHandler,
    inputValueChangeHandler,
    resetInput,
  };
}
