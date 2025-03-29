import React from "react";

const StartNode = ({ label }) => {
  return (
    <div
      className="d-flex align-items-center justify-content-center rounded-circle bg-success border border-4 border-success-emphasis text-white fw-semibold shadow"
      style={{ width: "80px", height: "80px" }}
    >
      {label}
    </div>
  );
};

export default StartNode;
