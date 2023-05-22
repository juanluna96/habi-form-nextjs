import React from "react";
import SummaryForm from "./forms/SummaryForm";

const LeftPanel: React.FC = () => {
  return (
    <div>
      <h2>Panel derecho</h2>
      <SummaryForm sideBar={true} />
    </div>
  );
};

export default LeftPanel;
