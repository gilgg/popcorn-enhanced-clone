import React from "react";
import "./SearchDropdownMenu.scss";

const SearchDropdownMenu = ({ dropdownOnClickHandler, isFormBtnActive }) => {
  return (
    <ul
      className={`search-dropdown-menu ${
        isFormBtnActive ? "form-btn-active" : ""
      }`}
    >
      <li
        className="search-dropdown-menu-item"
        onClick={() => dropdownOnClickHandler("movies")}
      >
        Movies
      </li>
      <li
        className="search-dropdown-menu-item"
        onClick={() => dropdownOnClickHandler("tv")}
      >
        Tv Series
      </li>
    </ul>
  );
};

export default SearchDropdownMenu;
