import React from "react";

import NewUser from "./components/NewUser";
import UserList from "./components/UserList";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles["core"]}>
      <NewUser />
      <UserList />
    </div>
  );
}

export default App;
