import React, { useState } from "react";
import "./MobileNavMenuList.scss";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import MobileParentSubMenu from "../submenu/MobileParentSubMenu";

const MobileNavMenuList = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [activeItem, setActiveItem] = useState(1);

  const onClickHandler = (item) => {
    setActiveItem(item);
    setToggleMenu(false);
  };

  const onToggleMenuHandler = () => {
    setToggleMenu((prevState) => !prevState);
  };

  return (
    <div className="mobile-nav-menu">
      <FaBars
        className="mobile-nav-menu-icon"
        onClick={() => onToggleMenuHandler()}
      />

      <ul
        className={`mobile-nav-menu-list ${
          toggleMenu ? "mobileMenuActive" : ""
        }`}
      >
        <MobileParentSubMenu
          title="Movies"
          setToggleMenu={setToggleMenu}
          onClickSetActiveItem={() => setActiveItem(1)}
          activeItemVal={activeItem}
          dataSet={1}
        />
        <MobileParentSubMenu
          title="Tv Series"
          setToggleMenu={setToggleMenu}
          onClickSetActiveItem={() => setActiveItem(2)}
          activeItemVal={activeItem}
          dataSet={2}
        />
        <li
          className={`mobile-nav-menu-list-item mobile-nav-menu-list-item-action ${
            activeItem === 3 ? "activeItem" : ""
          }`}
          onClick={() => onClickHandler(3)}
        >
          <Link to="/browse/movies/action">Action</Link>
        </li>
        <li
          className={`mobile-nav-menu-list-item mobile-nav-menu-list-item-comedy ${
            activeItem === 4 ? "activeItem" : ""
          }`}
          onClick={() => onClickHandler(4)}
        >
          <Link to="/browse/movies/comedy">Comedy</Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileNavMenuList;
