import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  let formIsValid = false;

  const {
    value: enteredFirstName,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangedHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredLastName,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangedHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastName,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput((value) => value.includes("@"));

  const submitHandler = (event) => {
    event.preventDefault();

    if (!firstNameIsValid || !lastNameIsValid || !emailIsValid) {
      return;
    }

    resetFirstName();
    resetLastName();
    resetEmail();
  };

  if (firstNameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const firstNameInputClasses = firstNameHasError
    ? "form-control invalid"
    : "form-control";

  const lastNameInputClasses = lastNameHasError
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={firstNameInputClasses}>
          <label htmlFor="firstName">First Name</label>
          <input
            onChange={firstNameChangedHandler}
            onBlur={firstNameBlurHandler}
            type="text"
            id="firstName"
            value={enteredFirstName}
          />
        </div>
        {firstNameHasError && (
          <p className="error-text">First Name is required!</p>
        )}
        <div className={lastNameInputClasses}>
          <label htmlFor="lastName">Last Name</label>
          <input
            onChange={lastNameChangedHandler}
            onBlur={lastNameBlurHandler}
            type="text"
            id="lastName"
            value={enteredLastName}
          />
          {lastNameHasError && (
            <p className="error-text">Last Name is required!</p>
          )}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          onChange={emailChangedHandler}
          onBlur={emailBlurHandler}
          type="text"
          id="email"
          value={enteredEmail}
        />
        {emailHasError && <p className="error-text">Email is required!</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
