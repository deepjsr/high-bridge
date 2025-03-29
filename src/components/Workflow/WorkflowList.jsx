import { useState } from "react";
import WorkflowTable from "./WorkflowTable";
import { mockWorkflowData } from "../../data/mock";
import SearchBar from "../Common/SearchBarbar";
import Pagination from "./Pagination";
import { useNavigate } from "react-router-dom";

const WorkflowList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [star, setStar] = useState({});
  const itemsPerPage = 8;
  const navigate = useNavigate();

  // Filter workflows based on search query
  const filteredWorkflows = mockWorkflowData.filter(
    (workflow) =>
      workflow.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      workflow.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Calculate pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentWorkflows = filteredWorkflows.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const totalPages = Math.ceil(filteredWorkflows.length / itemsPerPage);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Toggle star for a workflow
  const toggleStar = (id) => {
    setStar((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="container-fluid px-4 py-3">
      <div className="d-flex align-items-center mb-4">
        <button className="btn btn-light border me-3">
          <i className="bi bi-list"></i>
        </button>
        <h3 className="mb-0">Workflow Builder</h3>
      </div>

      <div className="row justify-content-between mb-4">
        <div className="col-md-5 col-lg-4">
          <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        </div>
        <div className="col-md-auto">
          <button
            className="btn btn-dark"
            onClick={() => navigate("/create-workflow")}
          >
            + Create New Process
          </button>
        </div>
      </div>

      <div className="bg-white rounded shadow-sm">
        <WorkflowTable
          workflows={currentWorkflows}
          toggleStar={toggleStar}
          starredItems={star}
        />

        <div className="d-flex justify-content-end py-3">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default WorkflowList;
