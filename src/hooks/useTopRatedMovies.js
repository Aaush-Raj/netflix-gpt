


import { useEffect } from "react";
import { API_OPTIONS,  GET_TOP_RATED_MOVIES_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../utils/movieSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const topRatedMovies = useSelector(store=>store.movies.topRatedMovies)

  const getTopRatedMovies = async () => {
    const data = await fetch(GET_TOP_RATED_MOVIES_URL, API_OPTIONS);
    const json = await data.json();
    dispatch(addTopRatedMovies(json.results));
  };

  useEffect(() => {
    !topRatedMovies && getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
