import React from "react";

const NodeConnector = ({ onAdd }) => {
  return (
    <div className="d-flex flex-column align-items-center my-2">
      <div
        className="bg-secondary"
        style={{ width: "2px", height: "24px" }}
      ></div>
      <button
        onClick={onAdd}
        className="d-flex align-items-center justify-content-center rounded-circle border border-secondary bg-white text-secondary"
        style={{ width: "35px", height: "35px" }}
        aria-label="Add node"
      >
        <i className="bi bi-plus"></i>
      </button>
      <div
        className="bg-secondary"
        style={{ width: "2px", height: "24px" }}
      ></div>
    </div>
  );
};

export default NodeConnector;
