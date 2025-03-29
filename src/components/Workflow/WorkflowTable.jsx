import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import WorkflowTimeline from "./WrokFlowTimeLine";

const WorkflowTable = ({ workflows, toggleStar, starredItems }) => {
  const [openMenuId, setOpenMenuId] = useState(null); // Track open menu by ID
  const [expandedRowId, setExpandedRowId] = useState(null); // Track expanded row by ID
  const navigate = useNavigate(); // Initialize navigation

  const toggleMenu = (id) => {
    setOpenMenuId(openMenuId === id ? null : id); // Toggle menu for specific ID
  };

  const toggleRow = (id) => {
    setExpandedRowId(expandedRowId === id ? null : id); // Toggle expanded row
  };

  return (
    <>
      <div className="table-responsive">
        <table className="table table-hover mb-0">
          <thead>
            <tr className="table-light">
              <th>Workflow Name</th>
              <th>ID</th>
              <th>Last Edited On</th>
              <th>Description</th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {workflows.map((workflow, index) => (
              <React.Fragment key={index}>
                <tr>
                  <td>{workflow.name}</td>
                  <td>{workflow.id}</td>
                  <td>{`${workflow.lastEditedBy} | ${workflow.lastEditedTime} - ${workflow.lastEditedDate}`}</td>
                  <td>{workflow.description}</td>
                  <td>
                    <button
                      onClick={() => toggleStar(`${index}`)}
                      className="btn btn-link text-warning p-0"
                    >
                      <i
                        className={`${
                          starredItems[`${index}`] ? "bi" : "bi-pin-angle"
                        } bi-pin-angle-fill`}
                      ></i>
                    </button>
                  </td>
                  <td>
                    <button className="btn btn-sm btn-outline-dark">
                      Execute
                    </button>
                  </td>
                  <td>
                    <div className="d-flex align-items-center position-relative">
                      <button className="btn btn-sm btn-outline-dark me-2">
                        Edit
                      </button>
                      <button
                        onClick={() => toggleMenu(index)} // Pass index as ID
                        className="btn btn-link text-dark p-0 me-2"
                        title="Delete Options" // Added tooltip for delete
                      >
                        <i className="bi bi-three-dots-vertical"></i>{" "}
                      </button>
                      {openMenuId === index && ( // Show menu only for the selected ID
                        <div
                          className="bg-white shadow rounded p-2 position-absolute"
                          style={{ top: "100%", left: "0", zIndex: 10 }} // Position relative to button
                        >
                          <button
                            className="btn btn-light text-danger text-center"
                            onClick={() => handleDeleteClick(workflow)}
                          >
                            Delete
                          </button>
                        </div>
                      )}
                      <button
                        onClick={() => toggleRow(index)}
                        className="btn btn-link text-dark p-0"
                      >
                        <i
                          className={`bi ${
                            expandedRowId === index
                              ? "bi-arrow-up"
                              : "bi-arrow-down"
                          }`}
                        ></i>{" "}
                      </button>
                    </div>
                  </td>
                </tr>
                {expandedRowId === index && (
                  <tr>
                    <td colSpan="7" className="bg-light">
                      {/* Expanded row content */}
                      <WorkflowTimeline timeline={workflow.timeline} />
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default WorkflowTable;
