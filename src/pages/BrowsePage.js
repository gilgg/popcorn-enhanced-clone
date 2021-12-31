import React, { useState, useEffect } from "react";
import "../components/home/Home.scss";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchData, getType, getMoviesArr, isEmpty } from "../helpers/helpers";
import { movieActions } from "../store/movieSlice";
import MovieCard from "../components/card/MovieCard";

const BrowsePage = () => {
  const dispatch = useDispatch();
  dispatch(movieActions.clearStateQuery());
  const params = useParams();
  const [toggleLoading, setToggleLoading] = useState(false);
  const type = getType(params);
  const movies = useSelector((state) => state.movie.movies);

  console.log("in browasepage");

  useEffect(() => {
    let data;

    const getData = async () => {
      data = await fetchData(type);
      const moviesArr = getMoviesArr(data, type);

      const k = "id";
      const arrayUniqueByKey = [
        ...new Map(moviesArr.map((item) => [item[k], item])).values(),
      ];

      console.log("the unique is: " + arrayUniqueByKey.length);

      console.log("in getData");
      // console.log(new Set(moviesArr).size);
      // dispatch(movieActions.addMovies(moviesArr));
      dispatch(movieActions.addMovies(arrayUniqueByKey));
      setToggleLoading((prevState) => !prevState);
    };

    getData();
  }, [params]);

  return (
    <div className="home">
      <div className="home-container">
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

export default BrowsePage;
