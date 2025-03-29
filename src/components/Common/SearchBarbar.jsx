import React from "react";

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="input-group">
      <input
        type="text"
        className="form-control"
        placeholder="Search By Workflow Name/ID"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <span className="input-group-text bg-white">
        <i className="bi bi-search text-muted"></i>
      </span>
    </div>
  );
};

export default SearchBar;
