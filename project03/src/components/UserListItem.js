import React from "react";

import styles from "./UserListItem.module.css";

const UserListItem = (props) => {
  return (
    <div className={styles["user-list-item"]}>
      <ul>
        <li>
          {props.username} ({props.age} Jahre alt)
        </li>
      </ul>
    </div>
  );
};

export default UserListItem;
