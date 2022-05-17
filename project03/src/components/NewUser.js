import React from "react";

import NewUserForm from "./NewUserForm";
import Wrapper from "./Helpers/Wrapper";
import styles from "./NewUser.module.css";

const NewUser = (props) => {
  const addUserHandler = (newUser) => {
    props.onAddUser(newUser);
  };

  return (
    <Wrapper>
      <NewUserForm
        className={styles["new-user-panel"]}
        onAddUser={addUserHandler}
        showModal={props.showModal}
        setShowModal={props.setShowModal}
      />
    </Wrapper>
  );
};

export default NewUser;
