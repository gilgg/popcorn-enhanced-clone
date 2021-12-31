import React from "react";
import "./MovieCard.scss";
import { Link } from "react-router-dom";

const MAX_TITLE_LEN = 21;

const MovieCard = ({ id, image, title, year }) => {
  const shortenTitle = (title) => {
    if (title.length > MAX_TITLE_LEN) {
      return title.slice(0, MAX_TITLE_LEN - 4) + "...";
    }
    return title;
  };

  return (
    <Link to={`/details/${id}`}>
      <div className="movie-card">
        <div className="movie-card-img">
          <img src={image} alt=""/>
        </div>
        <div className="movie-card-title">{shortenTitle(title)}</div>
        <div className="movie-card-year">{year}</div>
      </div>
    </Link>
  );
};

export default MovieCard;
