import React from "react";
import { FaPlay } from "react-icons/fa";
import { FaCircleInfo } from "react-icons/fa6";

const VideoTitle = ({ original_title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] md:px-10 px-6 absolute text-white bg-gradient-to-r from-black ">
      <h1 className="text-2xl  md:text-6xl font-bold">{original_title}</h1>
      <p className="font-semibold  hidden md:inline-block py-6 w-2/4">{overview}</p>

      <div className="my-4 md:m-0">
        <button className="bg-gray-400 px-3 rounded-lg  py-1 md:py-3 md:px-12 mr-2 text-white">
          <FaPlay className="inline mb-1"/> Play
        </button>
        <button className="bg-gray-400 px-3 rounded-lg  py-1  md:py-3 md:px-12    mr-2 text-white">
          <FaCircleInfo className="inline mb-1" /> Movie Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
