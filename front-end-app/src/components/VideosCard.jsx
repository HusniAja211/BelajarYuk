import VideoData from "../dummydata/videoData.jsx";

const VideoCard = ({ title, duration, image }) => {
  return (
    <div className="flex gap-4">
      <div className="bg-white shadow-md rounded-xl overflow-hidden w-72">
        <div className="h-40">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4">
          <p className="text-sm font-medium">{title}</p>
          <p className="text-xs text-gray-500 mt-1">{duration}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
