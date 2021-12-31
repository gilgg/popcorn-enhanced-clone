import React, { useState, useEffect, useRef } from "react";
import "./Nav.scss";
import { Link } from "react-router-dom";
import popcornLogo from "../../assets/popcorn-logo.png";
import { FaUnlock } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import { ImDrawer2 } from "react-icons/im";
import { AiFillFolderOpen } from "react-icons/ai";
import { BsInfoCircleFill } from "react-icons/bs";
import { BsFillGearFill } from "react-icons/bs";
import ParentSubMenu from "./submenu/ParentSubMenu";
import SearchForm from "./searchForm/SearchForm";

const Nav = () => {
  const [activeItem, setActiveItem] = useState(1);

  return (
    <header className="header">
      <div className="header-logo">
        <Link to="/">
          <span>Popcorn Time</span>
          <img src={popcornLogo} alt="pocorn logo" />
        </Link>
      </div>

      <div className="header-nav">
        <div className="header-nav-menu">
          <ul className="header-nav-menu-list">
            <ParentSubMenu
              title="Movies"
              onClickSetActiveItem={() => setActiveItem(1)}
              activeItemVal={activeItem}
              dataSet={1}
            />
            <ParentSubMenu
              title="Tv Series"
              onClickSetActiveItem={() => setActiveItem(2)}
              activeItemVal={activeItem}
              dataSet={2}
            />
            {/* <li
              className={`header-nav-menu-list-item ${
                activeItem === 1 ? "activeItem" : ""
              }`}
              onClick={() => setActiveItem(1)}
            >
              <Link to="/browse/movies">Movies</Link>
            </li> */}
            {/* <li
              className={`header-nav-menu-list-item ${
                activeItem === 2 ? "activeItem" : ""
              }`}
              onClick={() => setActiveItem(2)}
            >
              <Link to="/browse/series">TV Series</Link>
            </li> */}
            <li
              className={`header-nav-menu-list-item ${
                activeItem === 3 ? "activeItem" : ""
              }`}
              onClick={() => setActiveItem(3)}
            >
              <Link to="/browse/movies/action">Action</Link>
            </li>
            <li
              className={`header-nav-menu-list-item ${
                activeItem === 4 ? "activeItem" : ""
              }`}
              onClick={() => setActiveItem(4)}
            >
              <Link to="/browse/movies/comedy">Comedy</Link>
            </li>
            {/* <ParentSubMenu
              onClickSetActiveItem={() => setActiveItem(5)}
              activeItemVal={activeItem}
            /> */}
            <SearchForm />
          </ul>
        </div>

        <div className="header-nav-settings">
          <div className="header-nav-settings-icon icon-unlock">
            <FaUnlock />
          </div>
          <div className="header-nav-settings-icon icon-search">
            <BiSearch />
          </div>
          <div className="header-nav-settings-icon icon-drawer">
            <ImDrawer2 />
          </div>
          <div className="header-nav-settings-icon icon-folder">
            <AiFillFolderOpen />
          </div>
          <div className="header-nav-settings-icon icon-info">
            <BsInfoCircleFill />
          </div>
          <div className="header-nav-settings-icon icon-gear">
            <BsFillGearFill />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav;
