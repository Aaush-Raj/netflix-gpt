import { useRef } from "react";
import { useDispatch } from "react-redux";
import openai from "../utils/openai";
import { API_OPTIONS, FIND_MOVIE_URL } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";


const useGptSearch = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();
  

  const searchMovieTMDB = async (movie) => {
    const url = `${FIND_MOVIE_URL}${movie}&include_adult=true&language=en-US&page=1`;
    const data = await fetch(url, API_OPTIONS);
    const json = await data.json();
    console.log("JSON 000",json?.results[0])
    return json?.results[0];
  };

  const handleGptSearchClick = async () => {
    // if(searchText.current.value.trim()===""){
    //   console.log("EMPTY SEARCH!")
    // };
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Shawshank Redemption, Titanic, Don2, Golmaal, Anyone but you";

    const gptResult = await openai.chat.completions.create({
      messages: [{ role: "system", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    console.log(gptResult.choices?.[0]?.message?.content);
    const gptMovies = gptResult.choices?.[0]?.message?.content.split(",");
    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    const tmdbResults = await Promise.all(promiseArray);
    dispatch(
      addGptMovieResult({ movieResults: tmdbResults, movieNames: gptMovies })
    );
  };

  return { searchText, handleGptSearchClick };
};

export default useGptSearch;
