import React, { useState, useRef } from "react";

import styles from "./NewUserForm.module.css";
import Button from "./Button";
import ModalErrorMessage from "./ModalErrorMessage";

const NewUserForm = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [isError, setIsError] = useState("");

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

    if (!enteredName.trim().length && !enteredAge) {
      setIsError("MISSING_USERNAME_AND_AGE");
      props.setShowModal(true);
      return;
    } else if (!enteredName.trim().length) {
      setIsError("MISSING_USERNAME");
      props.setShowModal(true);
      return;
    } else if (!enteredAge) {
      setIsError("MISSING_AGE");
      props.setShowModal(true);
      return;
    }

    if (enteredAge < 1) {
      setIsError("INVALID_AGE");
      props.setShowModal(true);
      return;
    }

    const newUser = { username: enteredName, age: enteredAge };
    props.onAddUser(newUser);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  return (
    <div className={styles["new-user-form-panel"]}>
      <form onSubmit={formSubmitHandler}>
        <label htmlFor="username">Benutzername</label>
        <input id="username" type="text" ref={nameInputRef} />
        <br />
        <label htmlFor="age">Alter (Jahre)</label>
        <input id="age" type="number" ref={ageInputRef} />
        <Button type="submit" text="Benutzer hinzufügen" />
      </form>
      {props.showModal && isError === "MISSING_USERNAME_AND_AGE" && (
        <ModalErrorMessage
          setShowModal={props.setShowModal}
          title="Missing data"
          description="Username and age are empty!"
        />
      )}
      {props.showModal && isError === "MISSING_USERNAME" && (
        <ModalErrorMessage
          setShowModal={props.setShowModal}
          title="Missing data"
          description="Username is empty!"
        />
      )}
      {props.showModal && isError === "MISSING_AGE" && (
        <ModalErrorMessage
          setShowModal={props.setShowModal}
          title="Missing data"
          description="Age is empty!"
        />
      )}
      {props.showModal && isError === "INVALID_AGE" && (
        <ModalErrorMessage
          setShowModal={props.setShowModal}
          title="Invalid data"
          description="Age must be > 0!"
        />
      )}
    </div>
  );
};

export default NewUserForm;
