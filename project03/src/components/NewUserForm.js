import React, { useState } from "react";

import styles from "./NewUserForm.module.css";
import Button from "./Button";
import ModalErrorMessage from "./ModalErrorMessage";

const NewUserForm = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [isError, setIsError] = useState("");

  const changeUsername = (event) => {
    setUsername(event.target.value);
  };

  const changeAge = (event) => {
    setAge(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!username && !age) {
      console.log("Error! Missing username and age!");
      setIsError("MISSING_USERNAME_AND_AGE");
      props.setShowModal(true);
      return;
    } else if (!username) {
      console.log("Error! Missing username!");
      setIsError("MISSING_USERNAME");
      props.setShowModal(true);
      return;
    } else if (!age) {
      console.log("Error! Missing age!");
      setIsError("MISSING_AGE");
      props.setShowModal(true);
      return;
    }

    if (age < 1) {
      console.log("Error! Invalid age!");
      setIsError("INVALID_AGE");
      props.setShowModal(true);
      return;
    }

    const newUser = { username: username, age: age };
    props.onAddUser(newUser);

    setUsername("");
    setAge("");
  };

  return (
    <div className={styles["new-user-form-panel"]}>
      <form onSubmit={formSubmitHandler}>
        <label>Benutzername</label>
        <input type="text" value={username} onChange={changeUsername} />
        <br />
        <label>Alter (Jahre)</label>
        <input type="number" value={age} onChange={changeAge} />
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
