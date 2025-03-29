import React, { useState } from "react";
import { NodeType } from "./types";
import ApiConfigModal from "./ApiConfigModal";

const ActionNode = ({ node, onDelete }) => {
  const [isConfigModalOpen, setIsConfigModalOpen] = useState(false);

  const handleNodeClick = () => {
    if (node.type === NodeType.API_CALL) {
      setIsConfigModalOpen(true);
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-between w-50 max-w-md p-2 border border-2 border-success rounded bg-light shadow">
      <button className="btn btn-sm border-0" onClick={handleNodeClick}>
        <span className="ms-2 text-secondary">{node.label}</span>
      </button>
      <button className="btn btn-sm border-0" onClick={onDelete}>
        <i
          className="bi bi-trash text-danger fs-2"
          aria-label="Delete node"
        ></i>
      </button>

      {/* {isModalOpen && (
        <div className="modal fade show" style={{ display: "block" }}>
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h4>Configuration</h4>
            <form>
              <div>
                <label>Method</label>
                <select>
                  <option>GET</option>
                  <option>POST</option>
                  <option>PUT</option>
                  <option>DELETE</option>
                </select>
              </div>
              <div>
                <label>URL</label>
                <input type="text" placeholder="Type here..." />
              </div>
              <div>
                <label>Headers</label>
                <input type="text" placeholder="Header Name" />
              </div>
              <div>
                <label>Body</label>
                <textarea placeholder="Enter Descriptions..."></textarea>
              </div>
            </form>
          </div>
        </div>
      )} */}
      {node.type === NodeType.API_CALL && (
        <ApiConfigModal
          isOpen={isConfigModalOpen}
          onClose={() => setIsConfigModalOpen(false)}
        />
      )}
    </div>
  );
};

export default ActionNode;
