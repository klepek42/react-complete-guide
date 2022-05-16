import React from "react";

import Button from "./Button";
import styles from "./ModalErrorMessage.module.css";

const ModalErrorMessage = (props) => {
  const onClickHandler = () => {
    props.setShowModal(false);
  };

  return (
    <div>
      <div className={styles.backgroundOverlay} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>{props.title}</div>
          <div>{props.description}</div>
          <Button type="button" text="Okay" onClickHandler={onClickHandler} />
        </div>
      </div>
    </div>
  );
};

export default ModalErrorMessage;
