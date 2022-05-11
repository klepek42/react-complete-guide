import React, { useState } from "react";

import UserListItem from "./UserListItem";
import styles from "./UserList.module.css";

const UserList = (props) => {
  //const [users, setUsers] = useState();

  const noListItemsMessage = <p>Keine Benutzer vorhanden!</p>;
  // const userListItems = <div>noch leer</div>;
  const userListItems =
    props.users.length > 0
      ? props.users.map((user) => (
          <UserListItem username={user.username} age={user.age} />
        ))
      : noListItemsMessage;

  return <div className={styles["user-list"]}>{userListItems}</div>;
};

export default UserList;
