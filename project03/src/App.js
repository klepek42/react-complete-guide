import React, { useState } from "react";

import NewUser from "./components/NewUser";
import UserList from "./components/UserList";
import styles from "./App.module.css";

function App() {
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const addUserHandler = (newUser) => {
    setUsers((prevUsers) => {
      return [...prevUsers, newUser];
    });
  };

  return (
    <div className={styles.core}>
      <div>
        <NewUser
          onAddUser={addUserHandler}
          showModal={showModal}
          setShowModal={setShowModal}
        />
        <UserList users={users} />
      </div>
    </div>
  );
}

export default App;
