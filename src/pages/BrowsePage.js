import React from "react";
import Browse from "../components/browse/Browse";

const BrowsePage = ({ browseType, isLoading }) => {
  return (
    <div className="browse-search-page">
      <Browse browseType={browseType} isLoading={isLoading} />
    </div>
  );
};

export default BrowsePage;
