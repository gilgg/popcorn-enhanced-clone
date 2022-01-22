import React from "react";
import Browse from "../components/browse/Browse";

const BrowsePage = ({ browseType }) => {
  return (
    <div className="browse-search-page">
      <Browse browseType={browseType} />
    </div>
  );
};

export default BrowsePage;
