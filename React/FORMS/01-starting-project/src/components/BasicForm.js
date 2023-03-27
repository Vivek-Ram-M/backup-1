import useInputSelf from "../use-input(self)";

const BasicForm = (props) => {
  const isNotEmpty = (val) => val.trim() !== "";
  const {
    enteredValue: enteredFirstName,
    isValid: isFirstNameValid,
    hasError: hasFirstNameError,
    inputValueBlurHandler: enteredFirstNameBlurHandler,
    inputValueChangeHandler: enteredFirstNameChangeHandler,
    resetInput: resetFirstName,
  } = useInputSelf(isNotEmpty);
  const firstNameClass = hasFirstNameError
    ? "form-control invalid"
    : "form-control";

  const {
    enteredValue: enteredLastName,
    isValid: isLastNameValid,
    hasError: hasLastNameError,
    inputValueBlurHandler: enteredLastNameBlurHandler,
    inputValueChangeHandler: enteredLastNameChangeHandler,
    resetInput: resetLastName,
  } = useInputSelf(isNotEmpty);
  const LastNameClass = hasLastNameError
    ? "form-control invalid"
    : "form-control";

  const {
    enteredValue: enteredMail,
    isValid: isMailValid,
    hasError: hasMailError,
    inputValueBlurHandler: enteredMailBlurHandler,
    inputValueChangeHandler: enteredMailChangeHandler,
    resetInput: resetMail,
  } = useInputSelf((val) => val.includes("@") && val.endsWith(".com"));
  const MailClass = hasMailError ? "form-control invalid" : "form-control";

  let isFormValid = isFirstNameValid && isLastNameValid && isMailValid;

  function submitHandler(e) {
    console.log(enteredFirstName, enteredLastName, enteredMail);
    resetFirstName();
    resetLastName();
    resetMail();
  }
  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={firstNameClass}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={enteredFirstNameChangeHandler}
            onBlur={enteredFirstNameBlurHandler}
            value={enteredFirstName}
          />
          {hasFirstNameError && (
            <p className="error-text">Enter a valid First Name</p>
          )}
        </div>
        <div className={LastNameClass}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            onChange={enteredLastNameChangeHandler}
            onBlur={enteredLastNameBlurHandler}
            value={enteredLastName}
          />
          {hasLastNameError && (
            <p className="error-text">Enter a valid Last Name</p>
          )}
        </div>
      </div>
      <div className={MailClass}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="email"
          id="name"
          onChange={enteredMailChangeHandler}
          onBlur={enteredMailBlurHandler}
          value={enteredMail}
        />
        {hasMailError && <p className="error-text">Enter a valid mail</p>}
      </div>
      <div className="form-actions">
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
