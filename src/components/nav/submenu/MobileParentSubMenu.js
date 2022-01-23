import React, { useState, useRef } from "react";
import "./MobileParentSubMenu.scss";
import useCloseModal from "../../../hooks/useCloseModal";
import { IoMdArrowDropdown } from "react-icons/io";
import MobileMovieGenreSubMenu from "./MobileMovieGenreSubMenu";
import MobileSeriesGenreSubMenu from "./MobileSeriesGenreSubMenu";

const MobileParentSubMenu = ({
  setToggleMenu,
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
      className={`mobile-nav-menu-list-item mobile-parent-sub-menu ${
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
      <a className="mobile-parent-sub-menu-top">
        <div className="parent-sub-menu-top-menu-name">{title}</div>
        <div className="parent-sub-menu-top-menu-options">
          <span>All</span>
          <IoMdArrowDropdown />
        </div>
      </a>
      {title === "Movies" ? (
        <MobileMovieGenreSubMenu
          setToggleMenu={setToggleMenu}
          className="mobile-parent-sub-menu-bottom"
        />
      ) : (
        <MobileSeriesGenreSubMenu
          setToggleMenu={setToggleMenu}
          className="mobile-parent-sub-menu-bottom"
        />
      )}
    </li>
  );
};

export default MobileParentSubMenu;
