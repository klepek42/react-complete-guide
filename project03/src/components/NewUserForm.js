import React from "react";

import styles from "./NewUserForm.module.css";

const NewUserForm = () => {
  return (
    <div className={styles["new-user-form-panel"]}>
      <form>
        <label>Benutzername</label>
        <input type="text" />
        <br />
        <label>Alter (Jahre)</label>
        <input type="number" />
      </form>
    </div>
  );
};

export default NewUserForm;
