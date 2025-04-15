import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom"; 
import dummyVideos from "../dummydata/videoData"; 
import VideoCard from "../components/VideosCard"; 
import BackButton from "../components/BackButton"; 

const ITEMS_PER_LOAD = 15;

const Video = () => {
  const [visibleVideos, setVisibleVideos] = useState([]);
  const [loadedCount, setLoadedCount] = useState(1);
  const navigate = useNavigate(); 

  // Load more videos based on loadedCount
  const loadMoreVideos = useCallback(() => {
    const nextVideos = dummyVideos.slice(0, (loadedCount + 1) * ITEMS_PER_LOAD);
    setVisibleVideos(nextVideos);
    setLoadedCount((prev) => prev + 1);
  }, [loadedCount]);

  // Handle scroll event to load more videos when near bottom
  const handleScroll = useCallback(() => {
    const nearBottom =
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - 100;

    if (nearBottom && visibleVideos.length < dummyVideos.length) {
      loadMoreVideos();
    }
  }, [visibleVideos, loadMoreVideos]);

  // Initialize loading of videos and scroll event listener
  useEffect(() => {
    loadMoreVideos(); // Load first batch of videos
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll, loadMoreVideos]);

  // Navigate back to home
  const handleBackButtonClick = () => {
    navigate("/home"); 
  };

  // Navigate to WatchVideo page using video ID (fixed URL)
  const handleVideoClick = (videoId) => {
    navigate(`/video/${videoId}`); // Mengarahkan ke video dengan ID tanpa 'watchvideoid'
  };

  return (
    <div className="bg-blue-100 min-h-screen p-4">
      <div className="flex items-center mb-6">
        <BackButton onClick={handleBackButtonClick} />
        <h1 className="text-2xl font-bold text-gray-800">Daftar Video Pembelajaran</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {visibleVideos.map((video) => (
          <VideoCard key={video.id} video={video} onClick={handleVideoClick} />
        ))}
      </div>

      {visibleVideos.length >= dummyVideos.length && (
        <p className="text-center text-gray-500 mt-6">Semua video telah ditampilkan.</p>
      )}
    </div>
  );
};

export default Video;