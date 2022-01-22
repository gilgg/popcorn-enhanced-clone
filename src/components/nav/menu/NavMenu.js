import React from "react";
import "./NavMenu.scss";
import SearchForm from "../searchForm/SearchForm";
import NavMenuList from "./NavMenuList";
import MobileNavMenuList from "./MobileNavMenuList";

const NavMenu = () => {
  return (
    <div className="header-nav-menu">
      <NavMenuList />
      <MobileNavMenuList />
      <SearchForm />
    </div>
  );
};

export default NavMenu;
