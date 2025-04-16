import React from "react";
import VideoData from "../dummydata/videoData";
import VideoCard from "./VideosCard";

const VideosList = () => {
  const handleClick = (id) => {
    console.log("Video clicked:", id);
  };

  return (
    <section className="p-6">
      <h2 className="text-xl font-semibold mb-4">Video Pembelajaran</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {VideoData.map((video, index) => (
          <VideoCard key={index} {...video} onClick={handleClick} />
        ))}
      </div>
    </section>
  );
};

export default VideosList;
