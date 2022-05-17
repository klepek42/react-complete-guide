import React from "react";

import NewUserForm from "./NewUserForm";
import styles from "./NewUser.module.css";
import Wrapper from "./Helpers/Wrapper";

const NewUser = (props) => {
  const addUserHandler = (newUser) => {
    props.onAddUser(newUser);
  };

  return (
    <Wrapper className={styles["new-user-panel"]}>
      <NewUserForm
        onAddUser={addUserHandler}
        showModal={props.showModal}
        setShowModal={props.setShowModal}
      />
    </Wrapper>
  );
};

export default NewUser;
