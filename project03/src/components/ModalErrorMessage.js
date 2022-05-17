import React from "react";
import ReactDOM from "react-dom";

import Button from "./Button";
import styles from "./ModalErrorMessage.module.css";
import Wrapper from "./Helpers/Wrapper";

const Backdrop = (props) => {
  return <div className={styles.backgroundOverlay} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={styles.centered}>
      <div className={styles.modal}>
        <div className={styles.modalHeader}>{props.title}</div>
        <div>{props.description}</div>
        <Button
          type="button"
          text="Okay"
          onClickHandler={props.onClickHandler}
        />
      </div>
    </div>
  );
};

const ModalErrorMessage = (props) => {
  const onClickHandler = () => {
    props.setShowModal(false);
  };

  return (
    <Wrapper>
      {ReactDOM.createPortal(
        <Backdrop />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay onClickHandler={onClickHandler} />,
        document.getElementById("overlay-root")
      )}
    </Wrapper>
  );
};

export default ModalErrorMessage;
