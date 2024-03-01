import React from "react";
import { POSTER_URL } from "../utils/constants";

const MovieSuggestionCard = ({ movieData }) => {
  if (!movieData) return null;
  return (
    <div className="md:flex p-8 m-4 border-gray-400 border-2 rounded-lg text-white hover:scale-105 transition-transform bg-black opacity-100 z-50 ">
      <div className="md:w-3/12 md:h-40 h-28 w-full">
        <img
          className="w-full h-full object-cover  rounded-lg"
          src={POSTER_URL + movieData.poster_path}
          alt="movie poster"
        />
      </div>
      <div className="ml-4 w-9/12 flex flex-col">
        <h1 className="md:text-xl text-md mx-auto md:mx-0 pt-4 md:pt-0 font-bold mb-2">{movieData.title}</h1>
        <div className="">
          <p className="text-xs md:text-md   text-gray-300 mb-2">{movieData.overview}</p>
          <p className="text-xs md:text-md text-gray-500">Released on: {movieData.release_date}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieSuggestionCard;
