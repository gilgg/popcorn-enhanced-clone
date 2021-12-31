import React, { Fragment } from "react";
import "./Avatar.scss";

const Avatar = ({ name, image }) => {
  return (
    <Fragment>
      <div className="avatar">
        <div className="avatar-img">
          <img src={image} alt={name} />
        </div>
        <div className="avatar-name">{name}</div>
      </div>
    </Fragment>
  );
};

export default Avatar;
