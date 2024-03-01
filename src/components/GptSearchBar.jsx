import React, { useState } from "react";
import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import useGptSearch from "../hooks/useGptSearch";

const GptSearchBar = () => {
  const langConfig = useSelector((store) => store.config.lang);
  const { searchText, handleGptSearchClick } = useGptSearch();
  const  [emptySearch, setEmptySearch] = useState(false)

  return (
    <div className="pt-[40%] md:pt-[10%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className={` p-2 md:p-4 m-4 col-span-9 text-xs md:text-lg ${emptySearch &&  'placeholder-red-500' }`}
          placeholder={`${emptySearch ? 'Search cannot be empty...' : lang[langConfig].gptSearchPlaceholder} `}
        />
       
        <button
          className="col-span-3 m-4  text-xs md:text-lg py-2 md:px-4  bg-red-700 text-white rounded-lg"
          onClick={() => {
            console.log("CLICKED!!",searchText.current.value.trim())
            if(searchText.current.value.trim()=== ""){
              setEmptySearch(true);
            }
            else{
              setEmptySearch(false);
              handleGptSearchClick();

            }
            
            
          }}
        >
          {lang[langConfig].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
