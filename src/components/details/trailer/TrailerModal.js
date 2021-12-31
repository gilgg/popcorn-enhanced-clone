import React from "react";
import "./TrailerModal.scss";
import TrailerYoutubeVideo from "./TrailerYoutubeVideo";
import { GrClose } from "react-icons/gr";
import { IoMdClose } from "react-icons/io";

const TrailerModal = ({ type, mediaId, toggleModal, setToggleModal }) => {
  console.log("in trailerModal");
  return (
    <div className={`trailer-modal ${toggleModal ? "modalActive" : ""}`}>
      {/* <h1>dscsddvxczvxcz</h1> */}
      <TrailerYoutubeVideo
        type={type}
        mediaId={mediaId}
        toggleModal={toggleModal}
        setToggleModal={setToggleModal}
      />
      <GrClose className="trailer-modal-close-icon" />
      <IoMdClose className="trailer-modal-close-icon" />
    </div>
  );
};

export default TrailerModal;
