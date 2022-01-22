import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  getType,
  getGenreMediaFromAPI,
  getQueryMediaFromAPI,
  getPopularMediaFromAPI,
} from "../helpers/helpers";
import { movieActions } from "../store/movieSlice";

const useBrowse = (browseKind) => {
  // The browseKind can be regular, search, or genre
  const dispatch = useDispatch();
  const params = useParams();
  const type = getType(params);
  const [newMedias, setNewMedias] = useState([]);
  const prevMedias = useSelector((state) => state.movie.movies);
  let payload;

  if (browseKind === "genre" || browseKind === "regular") {
    dispatch(movieActions.clearStateQuery());
    payload = params.genreName;
  } else if (browseKind === "search") {
    payload = params.query;
  }

  useEffect(() => {
    const getMediasArr = async () => {
      let mediasArr;
      if (browseKind === "genre") {
        mediasArr = await getGenreMediaFromAPI(type, payload);
      } else if (browseKind === "search") {
        mediasArr = await getQueryMediaFromAPI(type, payload);
      } else {
        mediasArr = await getPopularMediaFromAPI(type);
      }
      dispatch(movieActions.addMovies(mediasArr));
      setNewMedias(mediasArr);
    };
    getMediasArr();
  }, [browseKind, params]);

  return {
    prevMedias,
    newMedias,
  };
};

export default useBrowse;
