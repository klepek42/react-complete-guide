import React from "react";

import NewUserForm from "./NewUserForm";
import Button from "./Button";
import styles from "./NewUser.module.css";

const NewUser = () => {
  const addBenutzerHandler = () => {};

  return (
    <div className={styles["new-user-panel"]}>
      <NewUserForm />
      <Button onClick={addBenutzerHandler}>Benutzer hinzufügen</Button>
    </div>
  );
};

export default NewUser;
