import React, { useEffect, useRef } from "react";
import "./MayAlsoLike.scss";
import { useSelector } from "react-redux";
import useGetFromApi from "../../hooks/useGetFromApi";
import { isEmpty, getUrl } from "../../helpers/helpers";
import { movieActions } from "../../store/movieSlice";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import MovieCard from "../card/MovieCard";

const MayAlsoLike = ({ type, mediaId }) => {
  const ref = useRef();
  const media = useSelector((state) => state.movie.similarMedia);

  const onClickLeftHandler = (e) => {
    e.preventDefault();
    ref.current.scrollBy({
      left: -145,
      behavior: "smooth",
    });
  };

  const onClickRightHandler = (e) => {
    e.preventDefault();
    ref.current.scrollBy({
      left: +145,
      behavior: "smooth",
    });
  };

  const mayAlsoLike = useGetFromApi(
    [],
    getUrl(type, "similar", mediaId),
    true,
    movieActions.addSimilarMedia
  );

  useEffect(() => {
    window.scrollTo(0, 0);
    ref.current.scrollLeft = 0;
  }, [mediaId]);

  return (
    <div className="may-also-like-container">
      <h1>You may also like</h1>
      <div className="may-also-like" ref={ref}>
        <div className="may-also-like-suggestions">
          {!isEmpty(media) &&
            !isEmpty(mayAlsoLike) &&
            media.map((media) => (
              <MovieCard
                key={media.id}
                id={media.id}
                title={media.title}
                image={media.poster}
                year={media.year}
              />
            ))}
        </div>
      </div>

      <button
        className="may-also-like-container-btn-left"
        onClick={onClickLeftHandler}
      >
        <MdKeyboardArrowLeft className="may-also-like-container-btn-icon" />
      </button>
      <button
        className="may-also-like-container-btn-right"
        onClick={onClickRightHandler}
      >
        <MdKeyboardArrowRight className="may-also-like-container-btn-icon" />
      </button>
    </div>
  );
};

export default MayAlsoLike;
