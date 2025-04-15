import React from "react";
import { Link } from "react-router-dom"; // ← Import Link

const ArticleCard = ({ id, title, author, date, img }) => {
  return (
    <Link
      to={`/article/${id}`}
      className="block"
    >
      <div className="flex gap-4 p-2 bg-white rounded shadow hover:shadow-lg transition">
        <img src={img} alt={title} className="w-20 h-20 object-cover rounded" />
        <div className="flex-1">
          <h4 className="font-semibold text-sm">{title}</h4>
          <p className="text-xs text-gray-600">
            Oleh : <span className="text-blue-600">{author}</span>
          </p>
          <p className="text-xs text-gray-400">{date}</p>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;
