import React from "react";

import NewUserForm from "./NewUserForm";
import styles from "./NewUser.module.css";

const NewUser = (props) => {
  const addUserHandler = (newUser) => {
    props.onAddUser(newUser);
  };

  return (
    <div className={styles["new-user-panel"]}>
      <NewUserForm
        onAddUser={addUserHandler}
        showModal={props.showModal}
        setShowModal={props.setShowModal}
      />
    </div>
  );
};

export default NewUser;
