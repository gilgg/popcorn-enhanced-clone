import React from "react";
import "./Browse.scss";
import useBrowse from "../../hooks/useBrowse";
import { isEmpty } from "../../helpers/helpers";
import MovieCard from "../card/MovieCard";

const Browse = ({ browseType, isLoading }) => {
  const { prevMedias, newMedias } = useBrowse(browseType);

  return (
    <div className="browse">
      {isLoading && <h1 className="loading">Loading...</h1>}
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
