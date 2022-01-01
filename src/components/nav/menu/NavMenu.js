import React, { useState } from "react";
import "./NavMenu.scss";
import { Link } from "react-router-dom";
import ParentSubMenu from "../submenu/ParentSubMenu";
import SearchForm from "../searchForm/SearchForm";

const NavMenu = () => {
  const [activeItem, setActiveItem] = useState(1);

  return (
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
        <SearchForm />
      </ul>
    </div>
  );
};

export default NavMenu;
