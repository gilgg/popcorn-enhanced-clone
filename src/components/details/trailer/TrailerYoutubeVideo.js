import React, { useRef } from "react";
import "./TrailerYoutubeVideo.scss";
import useGetFromApi from "../../../hooks/useGetFromApi";
import useCloseModal from "../../../hooks/useCloseModal";
import { getUrl } from "../../../helpers/helpers";

const TrailerYoutubeVideo = ({
  type,
  mediaId,
  toggleModal,
  setToggleModal,
}) => {
  const ytRef = useRef();
  useCloseModal(ytRef, setToggleModal);

  const ytKey = useGetFromApi("", getUrl(type, "trailer", mediaId));

  return (
    <div className="youtube-video" ref={ytRef}>
      {ytKey && toggleModal && (
        <iframe
          src={`https://www.youtube.com/embed/${ytKey}?autoplay=1`}
          frameBorder="0"
          width="700"
          height="700"
        ></iframe>
      )}
    </div>
  );
};

export default TrailerYoutubeVideo;
