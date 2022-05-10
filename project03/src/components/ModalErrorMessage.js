import React from "react";

import Button from "./Button";
import styles from "./ModalErrorMessage.module.css";

const ModalErrorMessage = () => {
  return (
    <div>
      <div>Fehlertitel</div>
      <div>Fehlerbeschreibung</div>
      <Button>Okay</Button>
    </div>
  );
};

export default ModalErrorMessage;
