import React, { useState } from "react";
import "./Details.scss";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import DetailsBg from "./DetailsBg";
import DetailsPoster from "./DetailsPoster";
import DetailsContent from "./DetailsContent";
import { isEmpty, getUrl } from "../../helpers/helpers";
import { movieActions } from "../../store/movieSlice";
import MayAlsoLike from "./MayAlsoLike";
import TrailerModal from "./trailer/TrailerModal";
import useGetFromApi from "../../hooks/useGetFromApi";

const Details = () => {
  const dispatch = useDispatch();
  const [toggleModal, setToggleModal] = useState(false);
  const params = useParams();
  const id = params.id;
  const movies = useSelector((state) => state.movie.totalMedia);

  const toggleModalHandler = () => {
    setToggleModal((prevState) => !prevState);
    window.scrollTo(0, 140);
  };

  dispatch(movieActions.clearStateQuery());

  const movie = movies.filter((movie) => {
    return movie.id.toString() === id;
  })[0];

  let apiUrl = movie
    ? getUrl(movie.type, "details", movie.id)
    : `${process.env.REACT_APP_API_BASE_URL}/details`;

  const details = useGetFromApi({}, apiUrl);

  return (
    <div className="details">
      <div className="details-container1">
        <div className="details-container">
          {!isEmpty(details) && (
            <>
              <DetailsPoster image={details.poster} title={details.title} />
              <DetailsContent
                media={details}
                toggleModal={toggleModalHandler}
              />
            </>
          )}
        </div>
        {!isEmpty(details) && (
          <MayAlsoLike type={details.type} mediaId={details.id} />
        )}
      </div>
      {!isEmpty(details) && <DetailsBg image={details.cover} />}
      {!isEmpty(details) && (
        <TrailerModal
          toggleModal={toggleModal}
          setToggleModal={setToggleModal}
          type={details.type}
          mediaId={details.id}
        />
      )}
    </div>
  );
};

export default Details;
