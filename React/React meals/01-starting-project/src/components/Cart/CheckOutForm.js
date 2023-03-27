import React, { useRef, useState } from "react";
import classes from "./CheckOutForm.module.css";
function isEmpty(val) {
  return val.trim() !== "";
}
function isValidMobile(val) {
  return val.length === 10;
}

export default function CheckOutForm(props) {
  const nameRef = useRef();
  const mobileRef = useRef();
  const cityRef = useRef();
  const [formInputsIsValid, setFormInputsIsValid] = useState({
    hasNameError: false,
    hasMobileError: false,
    hasCityError: false,
  });

  console.log(classes);
  function submitHandler(e) {
    e.preventDefault();
    const name = nameRef.current.value;
    const mobile = mobileRef.current.value;
    const city = cityRef.current.value;

    const isNameValid = isEmpty(name);
    const isCityValid = isEmpty(city);
    const isMobileValid = isValidMobile(mobile);

    setFormInputsIsValid({
      hasNameError: !isNameValid,
      hasCityError: !isCityValid,
      hasMobileError: !isMobileValid,
    });
    if (!(isNameValid && isCityValid && isMobileValid)) {
      return;
    }
    console.log(name, mobile, city);
    props.onConfirm({
      name,
      mobile,
      city,
    });
  }
  console.log(formInputsIsValid);
  const nameClass = `${classes["form-control"]} ${
    formInputsIsValid.hasNameError ? classes["invalid"] : ""
  }`;
  const mobileClass = `${classes["form-control"]} ${
    formInputsIsValid.hasMobileError ? classes["invalid"] : ""
  }`;
  const cityClass = `${classes["form-control"]} ${
    formInputsIsValid.hasCityError ? classes["invalid"] : ""
  }`;
  return (
    <form onSubmit={submitHandler} className={classes["form"]}>
      <div className={nameClass}>
        <label
          className={`${classes["form-control__label"]} ${classes["label-name"]}`}
          htmlFor="name"
        >
          Name
        </label>
        <input
          ref={nameRef}
          type="text"
          className={`${classes["form-control__input"]} ${classes["input-name"]}`}
          id="name"
        />
        {formInputsIsValid.hasNameError && (
          <p className={classes["error-text"]}>Enter a valid name </p>
        )}
      </div>
      <div className={mobileClass}>
        <label
          className={`${classes["form-control__label"]} ${classes["label-mobile"]}`}
          htmlFor="mobile"
        >
          Mobile Number
        </label>
        <input
          ref={mobileRef}
          type="number"
          className={`${classes["form-control__input"]} ${classes["input-mobile"]}`}
          id="mobile"
        />
        {formInputsIsValid.hasMobileError && (
          <p className={classes["error-text"]}>
            Enter a valid 10 digit mobile number{" "}
          </p>
        )}
      </div>
      <div className={cityClass}>
        <label
          className={`${classes["form-control__label"]} ${classes["label-city"]}`}
          htmlFor="city"
        >
          City
        </label>
        <input
          ref={cityRef}
          type="text"
          className={`${classes["form-control__input"]} ${classes["input-city"]}`}
          id="city"
        />
        {formInputsIsValid.hasCityError && (
          <p className={classes["error-text"]}>Enter a valid city name </p>
        )}
      </div>
      <div className={classes["form-actions"]}>
        <button
          type="button"
          className={`${classes["btn-cancel"]} ${classes["btn"]}`}
          onClick={props.onClose}
        >
          Cancel
        </button>
        <button
          type="submit"
          className={`${classes["btn-submit"]} ${classes["btn"]}`}
        >
          Submit
        </button>
      </div>
    </form>
  );
}
