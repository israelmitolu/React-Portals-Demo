import React from "react";
import { createPortal } from "react-dom";
import "./App.css";

const Overlay = ({ closeModal, children }) => {
  // return createPortal(
  //   <div className="overlay" onClick={closeModal}>
  //     {children}
  //   </div>,
  //   document.getElementById("portal")
  // );
  return (
    <div className="overlay" onClick={closeModal}>
      {children}
    </div>
  );
};

export default Overlay;
