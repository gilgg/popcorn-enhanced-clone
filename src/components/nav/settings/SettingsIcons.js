import React from "react";
import "./SettingsIcons.scss";
import SettingsIcon from "./SettingsIcon";

const SettingsIcons = () => {
  return (
    <div className="header-nav-settings">
      <SettingsIcon iconName="unlock" />
      <SettingsIcon iconName="drawer" />
      <SettingsIcon iconName="folder" />
      <SettingsIcon iconName="info" />
      <SettingsIcon iconName="gear" />
    </div>
  );
};

export default SettingsIcons;
