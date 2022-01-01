import React, { useEffect, useRef, useState } from "react";
import "./TrailerYoutubeVideo.scss";
import { getTrailerURLFromAPI } from "../../../helpers/helpers";

const TrailerYoutubeVideo = ({
  type,
  mediaId,
  toggleModal,
  setToggleModal,
}) => {
  const ytRef = useRef();
  const [ytKey, setYtKey] = useState("");

  useEffect(() => {
    let handler = (e) => {
      if (!ytRef.current.contains(e.target)) {
        setToggleModal(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  useEffect(() => {
    const getTrailer = async () => {
      const trailerKey = await getTrailerURLFromAPI(type, mediaId);
      setYtKey(trailerKey);
    };
    getTrailer();
  }, [mediaId]);

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
