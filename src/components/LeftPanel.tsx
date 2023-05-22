import React, { useState } from "react";
import SummaryForm from "./forms/SummaryForm";
import Modal from "./Modal";

const LeftPanel: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <h2>Panel derecho</h2>
      <button onClick={() => setShowModal(true)}>Open Modal</button>
      <Modal onClose={() => setShowModal(false)} show={showModal}>
        <SummaryForm sideBar={true} />
      </Modal>
      <div id="modal-root"></div>
      <SummaryForm sideBar={true} />
    </div>
  );
};

export default LeftPanel;
