import React, { useEffect, useRef, useState } from "react";
import "./TrailerYoutubeVideo.scss";
// import YouTube from "react-youtube";
import { getTrailerURLFromAPI } from "../../../helpers/helpers";

const TrailerYoutubeVideo = ({ type, mediaId, toggleModal, setToggleModal }) => {
  const ytRef = useRef();
  const [ytKey, setYtKey] = useState("");
  const [ytUrl, setYtUrl] = useState("");
  const [playVideo, setPlayVideo] = useState(false);

  // const opts = {
  //   height: "390",
  //   width: "640",
  //   playerVars: {
  //     // https://developers.google.com/youtube/player_parameters
  //     autoplay: 1,
  //   },
  // };

  // const videoOnReady = (event) => {
  //   // access to player in all event handlers via event.target
  //   event.target.pauseVideo();
  // }

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
    // getting the trailer from the api
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
          frameborder="0"
          width="700"
          height="700"
        ></iframe>
      )}
    </div>
  );
};

export default TrailerYoutubeVideo;
