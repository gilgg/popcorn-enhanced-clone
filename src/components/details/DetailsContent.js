import React from "react";
import "./DetailsContent.scss";
import Avatars from "./Avatars";
import DetailsControl from "./DetailsControl";
import DetailsContentInfo from "./DetailsContentInfo";
import Providers from "./Providers";

const DetailsContent = ({ media, toggleModal }) => {
  return (
    <div className="details-content">
      <div className="details-content-title-providers">
        <h1 className="details-content-title">{media.title}</h1>
        <Providers type={media.type} mediaId={media.id} />
      </div>
      <DetailsContentInfo media={media} />
      <div className="details-content-desc">{media.desc}</div>
      <DetailsControl toggleModal={toggleModal} />
      <Avatars type={media.type} mediaId={media.id} />
    </div>
  );
};

export default DetailsContent;
