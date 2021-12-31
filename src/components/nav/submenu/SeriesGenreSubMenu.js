import React from "react";
import "./SeriesGenreSubMenu.scss";
import { Link } from "react-router-dom";

const SeriesGenreSubMenu = () => {
  return (
    <ul className="genre-sub-menu">
      <li className="genre-sub-menu-item">
        <Link
          className="genre-sub-menu-item-link"
          to="/browse/tv/action-&-adventure"
        >
          Action
        </Link>
      </li>
      <li className="genre-sub-menu-item">
        <Link className="genre-sub-menu-item-link" to="/browse/tv/animation">
          Animation
        </Link>
      </li>
      <li className="genre-sub-menu-item">
        <Link className="genre-sub-menu-item-link" to="/browse/tv/comedy">
          Comedy
        </Link>
      </li>
      <li className="genre-sub-menu-item">
        <Link className="genre-sub-menu-item-link" to="/browse/tv/crime">
          Crime
        </Link>
      </li>
      <li className="genre-sub-menu-item">
        <Link className="genre-sub-menu-item-link" to="/browse/tv/documentary">
          Documentary
        </Link>
      </li>
      <li className="genre-sub-menu-item">
        <Link className="genre-sub-menu-item-link" to="/browse/tv/drama">
          Drama
        </Link>
      </li>
      <li className="genre-sub-menu-item">
        <Link className="genre-sub-menu-item-link" to="/browse/tv/family">
          Family
        </Link>
      </li>
      <li className="genre-sub-menu-item">
        <Link className="genre-sub-menu-item-link" to="/browse/tv/kids">
          Kids
        </Link>
      </li>
      <li className="genre-sub-menu-item">
        <Link className="genre-sub-menu-item-link" to="/browse/tv/mystery">
          Mystery
        </Link>
      </li>
      <li className="genre-sub-menu-item">
        <Link className="genre-sub-menu-item-link" to="/browse/tv/news">
          News
        </Link>
      </li>
      <li className="genre-sub-menu-item">
        <Link className="genre-sub-menu-item-link" to="/browse/tv/reality">
          Reality
        </Link>
      </li>

      <li className="genre-sub-menu-item">
        <Link
          className="genre-sub-menu-item-link"
          to="/browse/tv/sci-fi-&-fantasy"
        >
          Sci-Fi & Fantasy
        </Link>
      </li>
      <li className="genre-sub-menu-item">
        <Link className="genre-sub-menu-item-link" to="/browse/tv/soap">
          Soap
        </Link>
      </li>
      <li className="genre-sub-menu-item">
        <Link className="genre-sub-menu-item-link" to="/browse/tv/talk">
          Talk
        </Link>
      </li>
      <li className="genre-sub-menu-item">
        <Link
          className="genre-sub-menu-item-link"
          to="/browse/tv/war-&-politics"
        >
          War & Politics
        </Link>
      </li>
      <li className="genre-sub-menu-item">
        <Link className="genre-sub-menu-item-link" to="/browse/tv/western">
          Western
        </Link>
      </li>
    </ul>
  );
};

export default SeriesGenreSubMenu;
