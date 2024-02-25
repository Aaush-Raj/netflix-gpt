import React from "react";
import { FaPlay } from "react-icons/fa";
import { FaCircleInfo } from "react-icons/fa6";

const VideoTitle = ({ original_title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-10 absolute text-white bg-gradient-to-r from-black ">
      <h1 className="text-6xl font-bold">{original_title}</h1>
      <p className="font-semibold py-6 w-2/4">{overview}</p>

      <div className="">
        <button className="bg-gray-400 px-8 rounded-lg  py-3  mr-2 text-white">
          <FaPlay className="inline mb-1"/> Play
        </button>
        <button className="bg-gray-400 px-8 rounded-lg  py-3  mr-2 text-white">
          <FaCircleInfo className="inline mb-1" /> Movie Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
