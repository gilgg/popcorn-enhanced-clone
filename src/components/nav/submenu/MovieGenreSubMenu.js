import React from "react";
import "./MovieGenreSubMenu.scss";
import { Link } from "react-router-dom";

const MovieGenreSubMenu = () => {
  console.log("in moviegenresubmenu");

  return (
    <ul className="genre-sub-menu">
      <li className="genre-sub-menu-item">
        <Link className="genre-sub-menu-item-link" to="/browse/movies/action">
          Action
        </Link>
      </li>
      <li className="genre-sub-menu-item">
        <Link
          className="genre-sub-menu-item-link"
          to="/browse/movies/adventure"
        >
          Adventure
        </Link>
      </li>
      <li className="genre-sub-menu-item">
        <Link
          className="genre-sub-menu-item-link"
          to="/browse/movies/animation"
        >
          Animation
        </Link>
      </li>
      <li className="genre-sub-menu-item">
        <Link className="genre-sub-menu-item-link" to="/browse/movies/comedy">
          Comedy
        </Link>
      </li>
      <li className="genre-sub-menu-item">
        <Link className="genre-sub-menu-item-link" to="/browse/movies/crime">
          Crime
        </Link>
      </li>
      <li className="genre-sub-menu-item">
        <Link
          className="genre-sub-menu-item-link"
          to="/browse/movies/documentary"
        >
          Documentary
        </Link>
      </li>
      <li className="genre-sub-menu-item">
        <Link className="genre-sub-menu-item-link" to="/browse/movies/drama">
          Drama
        </Link>
      </li>
      <li className="genre-sub-menu-item">
        <Link className="genre-sub-menu-item-link" to="/browse/movies/family">
          Family
        </Link>
      </li>
      <li className="genre-sub-menu-item">
        <Link className="genre-sub-menu-item-link" to="/browse/movies/fantasy">
          Fantasy
        </Link>
      </li>
      <li className="genre-sub-menu-item">
        <Link className="genre-sub-menu-item-link" to="/browse/movies/history">
          History
        </Link>
      </li>
      <li className="genre-sub-menu-item">
        <Link className="genre-sub-menu-item-link" to="/browse/movies/horror">
          Horror
        </Link>
      </li>
      <li className="genre-sub-menu-item">
        <Link className="genre-sub-menu-item-link" to="/browse/movies/music">
          Music
        </Link>
      </li>
      <li className="genre-sub-menu-item">
        <Link className="genre-sub-menu-item-link" to="/browse/movies/mystery">
          Mystery
        </Link>
      </li>
      <li className="genre-sub-menu-item">
        <Link
          className="genre-sub-menu-item-link"
          to="/browse/movies/science-fiction"
        >
          Science Fiction
        </Link>
      </li>
      <li className="genre-sub-menu-item">
        <Link className="genre-sub-menu-item-link" to="/browse/movies/tv-movie">
          TV Movie
        </Link>
      </li>
      <li className="genre-sub-menu-item">
        <Link className="genre-sub-menu-item-link" to="/browse/movies/thriller">
          Thriller
        </Link>
      </li>
      <li className="genre-sub-menu-item">
        <Link className="genre-sub-menu-item-link" to="/browse/movies/war">
          War
        </Link>
      </li>
      <li className="genre-sub-menu-item">
        <Link className="genre-sub-menu-item-link" to="/browse/movies/western">
          Western
        </Link>
      </li>
    </ul>
  );
};

export default MovieGenreSubMenu;
