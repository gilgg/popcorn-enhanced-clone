import React from "react";
import "./DetailsContentInfo.scss";
import Dot from "../utils/Dot";
import Flag from "react-world-flags";

const DetailsContentInfo = ({ media }) => {
  return (
    <div className="details-content-info">
      <div className="details-content-info-country">
        <Flag
          // code={media.country !== undefined ? media.country.iso_3166_1 : "US"}
          code={media.country.iso_3166_1}
          className="details-content-info-country-flag"
        />
        {/* <div className="details-content-info-country-name">
          {media.country.name}
        </div> */}
      </div>
      {media.country && <Dot />}
      <p className="details-content-info-year">{media.year}</p>
      <Dot />
      <p className="details-content-info-min">{media.runtime} min</p>
      <Dot />
      <p className="details-content-info-genres">
        {/* {media.genres} */}
        {media.genres.map((genre, i) => (
          <span key={i}>
            {genre} {i < media.genres.length - 1 ? " / " : ""}
          </span>
        ))}
        {/* action / sci-fi / comedy / family */}
      </p>
      <Dot />
      <div className="details-content-info-rating">
        <p>⭐</p>
        <span>{media.rating} / 10</span>
      </div>
    </div>
  );
};

export default DetailsContentInfo;
