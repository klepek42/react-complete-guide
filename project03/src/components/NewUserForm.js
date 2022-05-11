import React, { useState } from "react";

import styles from "./NewUserForm.module.css";
import Button from "./Button";

const NewUserForm = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");

  const changeUsername = (event) => {
    setUsername(event.target.value);
  };

  const changeAge = (event) => {
    setAge(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const newUser = { username: username, age: age };
    props.onAddUser(newUser);
  };

  return (
    <div className={styles["new-user-form-panel"]}>
      <form onSubmit={formSubmitHandler}>
        <label>Benutzername</label>
        <input type="text" onChange={changeUsername} />
        <br />
        <label>Alter (Jahre)</label>
        <input type="number" onChange={changeAge} />
        <Button type="submit" text="Benutzer hinzufügen" />
      </form>
    </div>
  );
};

export default NewUserForm;
