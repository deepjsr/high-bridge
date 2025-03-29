import React, { useState } from "react";

const ApiConfigModal = ({ isOpen, onClose }) => {
  const [method, setMethod] = useState("GET");
  const [url, setUrl] = useState("");
  const [headerName, setHeaderName] = useState("");
  const [bodyContent, setBodyContent] = useState("");

  if (!isOpen) return null;

  return (
    <div
      className="modal d-block"
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content p-3">
          <div className="modal-header border-0">
            <h5 className="modal-title">API Call Configuration</h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
              aria-label="Close"
            ></button>
          </div>

          <div className="modal-body">
            <div className="d-flex flex-column">
              {/* Configuration sidebar indicator */}
              <div className="position-absolute start-0 top-50 translate-middle-y">
                <div className="bg-danger bg-opacity-0 text-white py-1 px-3 rounded-start">
                  <span
                    className="fw-bold text-danger"
                    style={{
                      writingMode: "sideways-lr",
                      textOrientation: "mixed",
                    }}
                  >
                    Configuration
                  </span>
                </div>
              </div>

              {/* Method */}
              <div className="mb-1 text-start">
                <label htmlFor="method" className="form-label">
                  Method
                </label>
                <div className="input-group">
                  <select
                    className="form-select"
                    id="method"
                    value={method}
                    onChange={(e) => setMethod(e.target.value)}
                  >
                    <option value="GET">GET</option>
                    <option value="POST">POST</option>
                    <option value="PUT">PUT</option>
                    <option value="DELETE">DELETE</option>
                    <option value="PATCH">PATCH</option>
                  </select>
                </div>
              </div>

              {/* URL */}
              <div className="mb-1 text-start">
                <label htmlFor="apiUrl" className="form-label">
                  URL
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="apiUrl"
                  placeholder="Type here..."
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                />
              </div>

              {/* Headers */}
              <div className="mb-1 text-start">
                <label htmlFor="headers" className="form-label">
                  Headers
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="headers"
                  placeholder="Header Name"
                  value={headerName}
                  onChange={(e) => setHeaderName(e.target.value)}
                />
              </div>

              {/* Body */}
              <div className="mb-1 text-start">
                <label htmlFor="body" className="form-label">
                  Body
                </label>
                <textarea
                  className="form-control"
                  id="body"
                  rows="4"
                  placeholder="Enter Descriptions..."
                  value={bodyContent}
                  onChange={(e) => setBodyContent(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApiConfigModal;
