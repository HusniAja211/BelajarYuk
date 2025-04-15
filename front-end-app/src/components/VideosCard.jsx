// src/components/VideoCard.jsx
import React from "react";
import { FaPlay, FaStar } from "react-icons/fa";

const VideoCard = ({ video, onClick }) => {
  return (
    <div
      className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer"
      onClick={() => onClick(video.id)} // Trigger the click event
    >
      <div className="relative">
        <img src={video.image} alt={video.title} className="w-full h-48 object-cover" />
        <button className="absolute inset-0 flex items-center justify-center text-white text-3xl z-10">
          <FaPlay className="bg-black bg-opacity-50 p-3 rounded-full" />
        </button>
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold text-blue-700">{video.title}</h2>
        <p className="text-sm text-gray-600">Durasi: {video.duration}</p>
        <div className="flex items-center text-yellow-500 mt-1">
          <FaStar className="mr-1" /> {video.rating}
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
