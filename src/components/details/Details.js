import React, { useEffect, useState } from "react";
import "./Details.scss";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import DetailsBg from "./DetailsBg";
import DetailsPoster from "./DetailsPoster";
import DetailsContent from "./DetailsContent";
import { getDetailsFromAPI, isEmpty } from "../../helpers/helpers";
import { movieActions } from "../../store/movieSlice";
import MayAlsoLike from "./MayAlsoLike";
import TrailerModal from "./trailer/TrailerModal";

const Details = () => {
  const dispatch = useDispatch();
  dispatch(movieActions.clearStateQuery());
  const params = useParams();
  const id = params.id;
  const [details, setDetails] = useState({});
  // const movies = useSelector((state) => state.movie.movies);
  const movies = useSelector((state) => state.movie.totalMedia);
  const movie = movies.filter((movie) => {
    return movie.id.toString() === id;
  })[0];
  const [toggleModal, setToggleModal] = useState(false);
  
  const toggleModalHandler = () => {
    setToggleModal((prevState) => !prevState);
    window.scrollTo(0, 140);
  };

  //////////// NEW PART API ////////////
  useEffect(() => {
    const getDetails = async () => {
      const detailsObj = await getDetailsFromAPI(movie.type, movie.id);
      setDetails(detailsObj);
    };

    getDetails();
  }, [params]);

  return (
    <div className="details">
      <div className="details-container1">
        <div className="details-container">
          {/* <DetailsPoster image={movie.poster} title={movie.title} /> */}
          {/* <DetailsContent media={movie} /> */}
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
