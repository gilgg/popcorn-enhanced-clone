import React, { useEffect, useState } from "react";
import "./BrowseGenre.scss";
import { useParams } from "react-router-dom";
import { getGenreMoviesFromAPI, isEmpty } from "../../helpers/helpers";
import MovieCard from "../card/MovieCard";
import { movieActions } from "../../store/movieSlice";
import { useSelector, useDispatch } from "react-redux";

const BrowseGenre = () => {
  const dispatch = useDispatch();
  dispatch(movieActions.clearStateQuery());
  const params = useParams();
  const type = params.type;
  const genreName = params.genreName;
  const [genreMedia, setGenreMedia] = useState([]);
  const media = useSelector((state) => state.movie.movies);

  useEffect(() => {
    const getMediaArr = async () => {
      const genreMediaArr = await getGenreMoviesFromAPI(type, genreName);

      const k = "id";
      const arrayUniqueByKey = [
        ...new Map(genreMediaArr.map((item) => [item[k], item])).values(),
      ];
      dispatch(movieActions.addMovies(arrayUniqueByKey));
      setGenreMedia(arrayUniqueByKey);
    };
    getMediaArr();
  }, [params]);

  return (
    <div className="browse-genre">
      <div className="browse-genre-container">
        {!isEmpty(media) &&
          !isEmpty(genreMedia) &&
          genreMedia.map((media) => (
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
  );
};

export default BrowseGenre;
