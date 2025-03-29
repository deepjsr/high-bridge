import React, { useState } from "react"; // Import useState
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import FlowBuilder from "../FlowBuilder/FlowBuilder";

const CreateProcessPage = () => {
  const navigate = useNavigate(); // Initialize navigation
  const [showModal, setShowModal] = useState(false); // State for modal visibility
  const [workflowName, setWorkflowName] = useState(""); // State for workflow name
  const [workflowDescription, setWorkflowDescription] = useState(""); // State for workflow description

  const handleSave = () => {
    // Add logic to save the new process
    console.log("New process saved!");
    navigate("/workflows"); // Navigate back to the workflow table
  };

  const handleModalSave = () => {
    console.log("Workflow Name:", workflowName);
    console.log("Workflow Description:", workflowDescription);
    setShowModal(false); // Close modal
    handleSave(); // Call save logic
  };

  return (
    <div className="bg-danger bg-opacity-10 min-vh-100">
      <div className="row">
        <div className="col-3">
          <button
            className="btn btn-light m-3"
            // Show modal on click
          >
            <i className=" me-2 bi bi-arrow-left" onClick={() => navigate(-1)}>
              {/* Navigate back to the previous page */}
              <span className="ms-2">Go Back</span>
            </i>
            {workflowName}
            <i
              className=" ms-4 bi bi-floppy2"
              onClick={() => setShowModal(true)}
            ></i>{" "}
          </button>
        </div>
        <div className="col-6 mt-5">
          <div className="text-center mt-5">
            <FlowBuilder />{" "}
            {/* FlowBuilder component for designing the workflow */}
          </div>
          <div className="mt-4"></div>
        </div>
      </div>

      {/* Save Modal */}
      {showModal && (
        <div className="modal d-block" tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Save your workflow</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)} // Close modal
                ></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label htmlFor="workflowName" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="workflowName"
                    placeholder="Name here"
                    value={workflowName}
                    onChange={(e) => setWorkflowName(e.target.value)} // Update name
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="workflowDescription" className="form-label">
                    Description
                  </label>
                  <textarea
                    className="form-control"
                    id="workflowDescription"
                    rows="3"
                    value={workflowDescription}
                    placeholder="Write here"
                    onChange={(e) => setWorkflowDescription(e.target.value)} // Update description
                  ></textarea>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={handleModalSave} // Save workflow
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateProcessPage;
