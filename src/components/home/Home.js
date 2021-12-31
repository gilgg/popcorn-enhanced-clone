import React from "react";
import "./Home.scss";
import MovieCard from "../card/MovieCard";
import { useSelector } from "react-redux";

const Home = () => {
  const movies = useSelector((state) => state.movie.movies);

  return (
    <div className="home">
      <div className="home-container">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            image={movie.poster}
            title={movie.title}
            year={movie.year}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
