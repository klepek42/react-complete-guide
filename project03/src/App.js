import React, { useState } from "react";

import NewUser from "./components/NewUser";
import UserList from "./components/UserList";
import styles from "./App.module.css";

const DEMO_USERS = [
  { username: "Gandalf", age: "11000" },
  { username: "Elon Musk", age: "50" },
];

function App() {
  const [users, setUsers] = useState(DEMO_USERS);

  const addUserHandler = (newUser) => {
    console.log("App addUserHandler newUser: " + JSON.stringify(newUser));
    setUsers((prevUsers) => {
      return [...prevUsers, newUser];
    });
  };

  return (
    <div className={styles["core"]}>
      <NewUser onAddUser={addUserHandler} />
      <UserList users={users} />
    </div>
  );
}

export default App;
