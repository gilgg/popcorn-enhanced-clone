import React, { useState } from "react";
import "./NavMenuList.scss";
import { Link } from "react-router-dom";
import ParentSubMenu from "../submenu/ParentSubMenu";

const NavMenuList = () => {
  const [activeItem, setActiveItem] = useState(1);

  return (
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
        className={`header-nav-menu-list-item header-nav-menu-list-item-action ${
          activeItem === 3 ? "activeItem" : ""
        }`}
        onClick={() => setActiveItem(3)}
      >
        <Link to="/browse/movies/action">Action</Link>
      </li>
      <li
        className={`header-nav-menu-list-item header-nav-menu-list-item-comedy ${
          activeItem === 4 ? "activeItem" : ""
        }`}
        onClick={() => setActiveItem(4)}
      >
        <Link to="/browse/movies/comedy">Comedy</Link>
      </li>
    </ul>
  );
};

export default NavMenuList;
