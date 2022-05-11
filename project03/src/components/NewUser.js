import React from "react";

import NewUserForm from "./NewUserForm";
import styles from "./NewUser.module.css";

const NewUser = (props) => {
  const addUserHandler = (newUser) => {
    props.onAddUser(newUser);
  };

  return (
    <div className={styles["new-user-panel"]}>
      <NewUserForm onAddUser={addUserHandler} />
    </div>
  );
};

export default NewUser;
