import React from "react";
import { NodeType } from "./types";

const AddNodeModal = ({ isOpen, onClose, onSelect, usedNodeTypes = [] }) => {
  if (!isOpen) return null;

  const nodeOptions = [
    { type: NodeType.API_CALL, label: "API Call" },
    { type: NodeType.EMAIL, label: "Email" },
  ];

  return (
    <div
      className="modal d-block"
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content p-3">
          <div className="modal-header border-0">
            <h5 className="modal-title">Add Node</h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
              aria-label="Close"
            ></button>
          </div>

          <div className="modal-body">
            <div className="d-flex flex-column gap-2">
              {nodeOptions.map((option) => {
                const isUsed = usedNodeTypes.includes(option.type);
                return (
                  <button
                    key={option.type}
                    onClick={() =>
                      !isUsed && onSelect(option.type, option.label)
                    }
                    className={`btn ${
                      isUsed ? "btn-secondary" : "btn-outline-secondary"
                    } text-start p-3`}
                    disabled={isUsed}
                  >
                    {option.label}{" "}
                    {isUsed && (
                      <span className="ms-2 badge bg-secondary">
                        Already added
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNodeModal;
