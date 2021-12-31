import React, { useState, useEffect, useRef } from "react";
import "./ParentSubMenu.scss";
import MovieGenreSubMenu from "./MovieGenreSubMenu";
import SeriesGenreSubMenu from "./SeriesGenreSubMenu";
import { IoMdArrowDropdown } from "react-icons/io";

const ParentSubMenu = ({
  onClickSetActiveItem,
  activeItemVal,
  title,
  dataSet,
}) => {
  const [active, setActive] = useState(false);
  const menuRef = useRef();
  console.log("in parentsubmenu")

  const onClickHandler = () => {
    setActive((prevState) => !prevState);
    onClickSetActiveItem();
  };

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setActive(false);
      }
    };

    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <li
      className={`header-nav-menu-list-item parent-sub-menu ${
        active ? "active" : ""
      } ${
        (activeItemVal === 1 && dataSet === 1) ||
        (activeItemVal === 2 && dataSet === 2)
          ? "activeItem"
          : ""
      }`}
      onClick={() => onClickHandler()}
      ref={menuRef}
    >
      <a className="parent-sub-menu-top">
        <div className="parent-sub-menu-top-menu-name">{title}</div>
        <div className="parent-sub-menu-top-menu-options">
          <span>All</span>
          <IoMdArrowDropdown />
        </div>
      </a>
      {title === "Movies" ? (
        <MovieGenreSubMenu className="parent-sub-menu-bottom" />
      ) : (
        <SeriesGenreSubMenu className="parent-sub-menu-bottom" />
      )}
    </li>
  );
};

export default ParentSubMenu;
