import React from "react";

const EndNode = ({ label }) => {
  return (
    <div
      className="d-flex align-items-center justify-content-center rounded-circle bg-danger border border-4 border-danger-emphasis text-white fw-semibold shadow"
      style={{ width: "80px", height: "80px" }}
    >
      {label}
    </div>
  );
};

export default EndNode;
