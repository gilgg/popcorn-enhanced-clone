import React, { useEffect, useState, useRef } from "react";
import "./MayAlsoLike.scss";
import { useSelector, useDispatch } from "react-redux";
import { movieActions } from "../../store/movieSlice";
import { isEmpty, getMayAlsoLikeFromAPI } from "../../helpers/helpers";
import MovieCard from "../card/MovieCard";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

const MayAlsoLike = ({ type, mediaId }) => {
  const dispatch = useDispatch();
  const ref = useRef();
  const refScrollX = useRef(0);
  const media = useSelector((state) => state.movie.similarMedia);
  const [mayAlsoLike, setMayAlsoLike] = useState([]);

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

  useEffect(() => {
    window.scrollTo(0, 0);
    ref.current.scrollLeft = 0;

    const getMayAlsoLike = async () => {
      const mayAlsoLikeArr = await getMayAlsoLikeFromAPI(type, mediaId);
      dispatch(movieActions.addSimilarMedia(mayAlsoLikeArr));
      setMayAlsoLike(mayAlsoLikeArr);
    };

    getMayAlsoLike();
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
