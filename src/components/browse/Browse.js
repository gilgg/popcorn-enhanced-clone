import React from "react";
import "./Browse.scss";
import useBrowse from "../../hooks/useBrowse";
import { isEmpty } from "../../helpers/helpers";
import MovieCard from "../card/MovieCard";

const Browse = ({ browseType }) => {
  const { prevMedias, newMedias } = useBrowse(browseType);

  return (
    <div className="browse">
      {browseType === "search" && isEmpty(prevMedias) && (
        <h1 className="browse-search-no-results">
          No results found! Please search for something else...
        </h1>
      )}

      <div className="browse-container">
        {!isEmpty(prevMedias) &&
          !isEmpty(newMedias) &&
          newMedias.map((media) => (
            <MovieCard
              key={media.id}
              id={media.id}
              title={media.title}
              image={media.poster}
              year={media.year}
            />
          ))}
      </div>
    </div>
  );
};

export default Browse;
