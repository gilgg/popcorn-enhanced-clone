import React from "react";
import "./DetailsContentInfoMobile.scss";
import Dot from "../utils/Dot";
import Flag from "react-world-flags";

const DetailsContentInfo = ({ media }) => {
  return (
    <div className="details-content-info-mobile">
      <div className="details-content-info-mobile-first-part">
        <div className="details-content-info-mobile-country">
          <Flag
            code={media.country.iso_3166_1}
            className="details-content-info-mobile-country-flag"
          />
        </div>
        {media.country && <Dot />}

        <p className="details-content-info-mobile-year">{media.year}</p>
        <Dot />
        <p className="details-content-info-mobile-min">{media.runtime} min</p>
      </div>

      <p className="details-content-info-mobile-genres">
        {media.genres.map((genre, i) => (
          <span key={i}>
            {genre} {i < media.genres.length - 1 ? " / " : ""}
          </span>
        ))}
      </p>

      <div className="details-content-info-mobile-rating">
        <p>⭐</p>
        <span>{media.rating} / 10</span>
      </div>
    </div>
  );
};

export default DetailsContentInfo;
