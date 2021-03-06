import React, { useState, useRef } from "react";
import "./ParentSubMenu.scss";
import useCloseModal from "../../../hooks/useCloseModal";
import { IoMdArrowDropdown } from "react-icons/io";
import MovieGenreSubMenu from "./MovieGenreSubMenu";
import SeriesGenreSubMenu from "./SeriesGenreSubMenu";

const ParentSubMenu = ({
  onClickSetActiveItem,
  activeItemVal,
  title,
  dataSet,
}) => {
  const [active, setActive] = useState(false);
  const menuRef = useRef();

  const onClickHandler = () => {
    setActive((prevState) => !prevState);
    onClickSetActiveItem();
  };

  useCloseModal(menuRef, setActive);

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
