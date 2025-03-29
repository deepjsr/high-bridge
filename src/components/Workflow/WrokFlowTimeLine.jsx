import React from "react";

const WorkflowTimeline = ({ timeline }) => {
  return (
    <div className="px-4 py-3 bg-light">
      <div className="position-relative timeline-container">
        {timeline.map((item, index) => (
          <div key={item.id} className="d-flex timeline-item mb-3">
            <div className="timeline-indicator">
              <div className="timeline-dot bg-danger"></div>
              {index !== timeline.length - 1 && (
                <div className="timeline-line"></div>
              )}
            </div>
            <div className="d-flex align-items-center ms-3">
              <div className="me-3">
                <span className="text-nowrap">
                  {item.date} - {item.time}
                </span>
              </div>
              <div className="me-3">
                <span
                  className={`badge ${
                    item.status === "Passed"
                      ? "bg-success bg-opacity-25 text-success"
                      : "bg-danger bg-opacity-25 text-danger"
                  } rounded-pill px-3 py-2`}
                >
                  {item.status}
                </span>
              </div>
              <div>
                <button className="btn btn-sm btn-light border">
                  <i class="bi bi-box-arrow-up-right"></i>{" "}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkflowTimeline;
