import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, GET_MOVIE_DETAILS_URL } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();
    const trailerVideo = useSelector(store=>store.movies.trailerVideo)
    const getMovieData = async () => {
      const data = await fetch(
        `${GET_MOVIE_DETAILS_URL}${movieId}/videos`,
        API_OPTIONS
      );
      const json = await data.json();
      const trailerData = json?.results.find(
        (video) => video.type === "Traillddssaausher"
      );
      const trailer =
        trailerData && trailerData.length ? trailerData : json?.results[0];
      dispatch(addTrailerVideo(trailer));
    };
  
    useEffect(() => {
      !trailerVideo && getMovieData();
    }, []);
  
}

export default useMovieTrailer
