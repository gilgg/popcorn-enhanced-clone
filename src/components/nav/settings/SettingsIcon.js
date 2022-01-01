import React from "react";
import "./SettingsIcon.scss";
import { FaUnlock } from "react-icons/fa";
import { ImDrawer2 } from "react-icons/im";
import { AiFillFolderOpen } from "react-icons/ai";
import { BsInfoCircleFill } from "react-icons/bs";
import { BsFillGearFill } from "react-icons/bs";

const icons = {
  unlock: <FaUnlock />,
  drawer: <ImDrawer2 />,
  folder: <AiFillFolderOpen />,
  info: <BsInfoCircleFill />,
  gear: <BsFillGearFill />,
};

const SettingsIcon = ({ iconName }) => {
  return (
    <div className={`header-nav-settings-icon icon-${iconName}`}>
      {icons[iconName]}
    </div>
  );
};

export default SettingsIcon;
