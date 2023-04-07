import React from "react";
import Overlay from "./Overlay";
import "./App.css";

const Modal = ({ closeModal }) => {
  return (
    <Overlay closeModal={closeModal}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h3>Modal</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, libero.
          Exercitationem quod quam perspiciatis quasi voluptate sint facilis
          quia praesentium pariatur veniam quidem nam, ullam porro eveniet
          molestiae minima eligendi.
        </p>
        <button onClick={closeModal}>Close</button>
      </div>
    </Overlay>
  );
};

export default Modal;
