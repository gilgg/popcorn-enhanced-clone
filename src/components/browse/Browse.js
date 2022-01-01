import React, { useState, useEffect } from "react";
import "./Browse.scss";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  isEmpty,
  getType,
  getPopularMediaFromAPI,
} from "../../helpers/helpers";
import { movieActions } from "../../store/movieSlice";
import MovieCard from "../card/MovieCard";

const Browse = () => {
  const dispatch = useDispatch();
  dispatch(movieActions.clearStateQuery());
  const params = useParams();
  const [toggleLoading, setToggleLoading] = useState(false);
  const type = getType(params);
  const movies = useSelector((state) => state.movie.movies);

  useEffect(() => {
    const getPopularMedia = async () => {
      const moviesArr = await getPopularMediaFromAPI(type);
      dispatch(movieActions.addMovies(moviesArr));
      setToggleLoading((prevState) => !prevState);
    };
    getPopularMedia();
  }, [params]);

  return (
    <div className="browse">
      <div className="browse-container">
        {!isEmpty(movies) &&
          movies.map((movie) => {
            return (
              <MovieCard
                key={movie.id}
                id={movie.id}
                image={movie.poster}
                title={movie.title}
                year={movie.year}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Browse;
