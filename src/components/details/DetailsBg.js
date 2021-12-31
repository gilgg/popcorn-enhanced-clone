import React from "react";
import "./DetailsBg.scss";

const DetailsBg = ({ image }) => {
  return (
    <div className="details-bg">
      <img src={image} alt="" />
    </div>
  );
};

export default DetailsBg;
