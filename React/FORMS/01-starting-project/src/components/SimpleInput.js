// import { useState } from "react";
import useInput from "../use-input";
// import React, { PureComponent } from 'react'
const SimpleInput = (props) => {
  // const [enteredName, setEnteredName] = useState("");
  const {
    enteredValue: enteredName,
    // enteredValueIsTouched: enteredNameIsTouched,
    enteredValueIsValid: enteredNameIsValid,
    hasError: isEnteredNameIsInvalid,
    valueInputBlurHandler: nameInputBlurHandler,
    valueInputChangeHandler: nameInputChangeHandler,
    reset: resetName,
  } = useInput((val) => val.trim() !== "");
  const {
    enteredValue: enteredMail,
    // enteredValueIsTouched: enteredNameIsTouched,
    enteredValueIsValid: enteredMailIsValid,
    hasError: isEnteredMailIsInvalid,
    valueInputBlurHandler: mailInputBlurHandler,
    valueInputChangeHandler: mailInputChangeHandler,
    reset: resetMail,
  } = useInput((val) => val.includes("@") && val.endsWith(".com"));
  // const [enteredMail, setEnteredMail] = useState("");

  // const [enteredNameIsvalid, setEnteredNameIsvalid] = useState(true);
  // const [enteredNameIsTouched, setEnteredNameIsTouched] = useState(false);
  // const [enteredMailIsTouched, setEnteredMailIsTouched] = useState(false);
  // const inputRef = useRef("");

  // const enteredNameIsvalid = enteredName.trim() !== "";
  // const enteredMailIsvalid =
  // enteredMail.includes("@") && enteredMail.endsWith(".com");
  let buttonDisplay = false;

  // const isEnteredNameIsInvalid = enteredNameIsTouched && !enteredNameIsvalid;
  // const isEnteredMailIsInvalid = enteredMailIsTouched && !enteredMailIsvalid;
  buttonDisplay = enteredMailIsValid && enteredNameIsValid;
  console.log(isEnteredNameIsInvalid);
  // useEffect(() => {
  //   if (!isEnteredNameIsInvalid) {
  //     console.log("NAme is valid");
  //   }
  // }, [isEnteredNameIsInvalid]);

  // function mailInputChangeHandler(e) {
  //   setEnteredMail(e.target.value);
  // }
  // function mailInputBlurHandler() {
  //   setEnteredMailIsTouched(true);
  // }

  function submitHandler(e) {
    e.preventDefault();
    // setEnteredNameIsTouched(true);
    // setEnteredMailIsTouched(true);
    if (!enteredNameIsValid || !enteredMailIsValid) {
      // buttonDisplay = false;
      return;
    }
    // if (enteredName.trim() === "") {
    //   setEnteredNameIsvalid(false);
    //   return;
    // }
    // setEnteredNameIsvalid(true);
    // buttonDisplay = true;
    console.log(enteredName); 
    console.log(enteredMail);
    // console.log(inputRef.current.value);
    resetMail();
    resetName();
    // setEnteredNameIsTouched(false);
    // setEnteredMailIsTouched(false);
  }
  const nameClass = isEnteredNameIsInvalid
    ? "form-control invalid"
    : "form-control";
  const mailClass = isEnteredMailIsInvalid
    ? "form-control invalid"
    : "form-control";
  console.log(buttonDisplay);
  return (
    <form onSubmit={submitHandler}>
      <div className={nameClass}>
        <label htmlFor="name">Your Name</label>
        <input
          // ref={inputRef}
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {isEnteredNameIsInvalid && (
          <p className="error-text">Enter a valid name</p>
        )}
      </div>
      <div className={mailClass}>
        <label htmlFor="email">Email id</label>
        <input
          onBlur={mailInputBlurHandler}
          type="email"
          id="email"
          value={enteredMail}
          onChange={mailInputChangeHandler}
        />
        {isEnteredMailIsInvalid && (
          <p className="error-text">Enter a valid mail address </p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!buttonDisplay}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
