import React from "react";
import "./DetailsControl.scss";
import { FaPlay } from "react-icons/fa";
import { MdMovieFilter } from "react-icons/md";

const DetailsControl = ({ toggleModal }) => {
  return (
    <div className="details-control">
      <button className="btn play-btn">
        <FaPlay className="play-btn-icon details-control-icon" />
        <span>Play</span>
      </button>
      <button className="btn trailer-btn" onClick={() => toggleModal()}>
        <MdMovieFilter className="trailer-btn-icon details-control-icon" />
        <span>Trailer</span>
      </button>
    </div>
  );
};

export default DetailsControl;
