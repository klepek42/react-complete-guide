import React, { useState } from "react";

import UserListItem from "./UserListItem";
import styles from "./UserList.module.css";

const DEMO_USERS = [
  { username: "Gandalf", age: "11000" },
  { username: "Elon Musk", age: "50" },
];

const noListItemsMessage = <p>Keine Benutzer vorhanden!</p>;
const userListItems =
  DEMO_USERS.length > 0
    ? DEMO_USERS.map((user) => (
        <UserListItem username={user.username} age={user.age} />
      ))
    : userListItems;

const UserList = () => {
  const [users, setUsers] = useState(DEMO_USERS);

  return <div className={styles["user-list"]}>{userListItems}</div>;
};

export default UserList;
