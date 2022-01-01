import React, { useEffect, useState } from "react";
import "./BrowseSearch.scss";
import { useParams } from "react-router-dom";
import { getQueryMediaFromAPI, isEmpty } from "../../helpers/helpers";
import { movieActions } from "../../store/movieSlice";
import { useSelector, useDispatch } from "react-redux";
import MovieCard from "../card/MovieCard";

const BrowseSearch = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const query = params.query;
  const type = params.type;
  const [queryMedia, setQueryMedia] = useState([]);
  const media = useSelector((state) => state.movie.movies);

  useEffect(() => {
    const getMediaByQuery = async () => {
      const mediaArr = await getQueryMediaFromAPI(type, query);
      dispatch(movieActions.addMovies(mediaArr));
      setQueryMedia(mediaArr);
    };

    getMediaByQuery();
  }, [query]);

  return (
    <div className="browse-search">
      {isEmpty(media) && (
        <h1 className="browse-search-no-results">
          No results found! Please search for something else...
        </h1>
      )}
      <div className="browse-genre-container">
        {!isEmpty(media) &&
          !isEmpty(queryMedia) &&
          media.map((media) => (
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

export default BrowseSearch;
