import { useEffect } from "react";
import { API_OPTIONS, GET_POPULAR_MOVIES_URL, GET_UPCOMING_MOVIES_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../utils/movieSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const upcomingMovies  = useSelector(store=>store.movies.upcomingMovies)

  const getUpcomingMovies = async () => {
    const data = await fetch(GET_UPCOMING_MOVIES_URL, API_OPTIONS);
    const json = await data.json();
    dispatch(addUpcomingMovies(json.results));
  };

  useEffect(() => {
    !upcomingMovies && getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
