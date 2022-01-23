import React from "react";
import "./TrailerModal.scss";
import { IoMdClose } from "react-icons/io";
import TrailerYoutubeVideo from "./TrailerYoutubeVideo";

const TrailerModal = ({ type, mediaId, toggleModal, setToggleModal }) => {
  return (
    <div className={`trailer-modal ${toggleModal ? "modalActive" : ""}`}>
      <TrailerYoutubeVideo
        type={type}
        mediaId={mediaId}
        toggleModal={toggleModal}
        setToggleModal={setToggleModal}
      />
      <IoMdClose className="trailer-modal-close-icon" />
    </div>
  );
};

export default TrailerModal;
