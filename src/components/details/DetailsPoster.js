import React from "react";
import "./DetailsPoster.scss";

const DetailsPoster = ({ image, title }) => {
  return (
    <div className="details-container-img">
      <img src={image} alt={`${title} poster`} />
    </div>
  );
};

export default DetailsPoster;
