
import { useEffect } from 'react'
import { API_OPTIONS,GET_ALL_MOVIES_URL } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import {addNowPlayingMovies} from '../utils/movieSlice';


const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const nowPlayingMovies = useSelector(store=>store.movies.nowPlayingMovies)

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      GET_ALL_MOVIES_URL,
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    !nowPlayingMovies && getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
