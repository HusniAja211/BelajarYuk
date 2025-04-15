import React from "react";
import VideoData from "../dummydata/videoData";
import VideoCard from "./VideosCard";

const VideosList = () => {
  return (
    <section className="p-6">
      <h2 className="text-xl font-semibold mb-4">Video Pembelajaran</h2>
      <div className="flex flex-wrap gap-6">
        {VideoData.map((video, index) => (
          <VideoCard key={index} {...video} />
        ))}
      </div>
    </section>
  );
};

export default VideosList;
