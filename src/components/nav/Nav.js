import React from "react";
import "./Nav.scss";
import { Link } from "react-router-dom";
import SettingsIcons from "./settings/SettingsIcons";
import popcornLogo from "../../assets/popcorn-logo.png";
import NavMenu from "./menu/NavMenu";

const Nav = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <Link to="/">
          <span>Popcorn Time</span>
          <img src={popcornLogo} alt="pocorn logo" />
        </Link>
      </div>

      <div className="header-nav">
        <NavMenu />
        <SettingsIcons />
      </div>
    </header>
  );
};

export default Nav;
