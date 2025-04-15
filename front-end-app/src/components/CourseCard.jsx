import React from "react";


const CourseCard = ({ title, lessons, duration, rating, image }) => {
  return (
    <article className="bg-white rounded-xl shadow-md p-3 w-full max-w-[180px]">
      <img src={image} alt={title} className="w-full h-32 object-cover rounded-md mb-3" />
      <h3 className="text-sm font-semibold leading-tight line-clamp-2">{title}</h3>
      <p className="text-xs text-gray-500 mb-2">({lessons} lessons)</p>
      <div className="flex items-center justify-between text-xs">
        <span className="flex items-center gap-1 text-blue-600">
          <i className="bx bx-time" /> {duration}
        </span>
        <span className="flex items-center gap-1 text-yellow-500">
          <i className="bx bxs-star" /> {rating}
        </span>
      </div>
    </article>
  );
};

export default CourseCard;
