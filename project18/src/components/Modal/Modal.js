import React from "react";

import "./Modal.css";
import { CSSTransition } from "react-transition-group";

const animationTiming = {
  enter: 400,
  exit: 1000,
};

const modal = (props) => {
  const cssClasses = [
    "Modal",
    props.show === "entering"
      ? "ModalOpen"
      : props.show === "exiting"
      ? "ModalClose"
      : null,
  ];

  return (
    <CSSTransition
      mountOnEnter
      unmountOnExit
      in={props.show}
      timeout={animationTiming}
      classNames={{
        enter: "",
        enterActive: "ModalOpen",
        exit: "",
        exitActive: "ModalClosed",
      }}
    >
      {(state) => {
        const cssClasses = [
          "Modal",
          state === "entering"
            ? "ModalOpen"
            : state === "exiting"
            ? "ModalClosed"
            : null,
        ];
        return (
          <div className={cssClasses.join(" ")}>
            <h1>A Modal</h1>
            <button className="Button" onClick={props.closed}>
              Dismiss
            </button>
          </div>
        );
      }}
    </CSSTransition>
  );
};

export default modal;
