import { useState } from "react";
import Modal from "./Modal";
import "./App.css";

function App() {
  // State to manage whether the modal is open or closed
  const [modalOpen, setModalOpen] = useState(false);

  // Function to toggle the state between open and closed
  const handleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <div className="App">
      <h1>React Modal Demo</h1>
      <p>
        This is a demo of how to use portals to create a modal component in
        React.
      </p>
      <button onClick={handleModal}>Open Modal</button>

      {modalOpen && <Modal closeModal={() => setModalOpen(false)} />}
    </div>
  );
}

export default App;
