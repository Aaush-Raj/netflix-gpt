import React from "react";
import { useSelector } from "react-redux";
import MovieSuggestionCard from "./MovieSuggestionCard";

const GptMovieSuggestions = () => {
  const { movieResults } = useSelector((store) => store.gpt);

  if (!movieResults) return null;
  return (
    <div className="bg-black text-white p-4 m-6 ">
      {movieResults.map((movieData) => (
        <MovieSuggestionCard key={movieData?.id} movieData={movieData} />
      ))}
    </div>
  );
};

export default GptMovieSuggestions;
