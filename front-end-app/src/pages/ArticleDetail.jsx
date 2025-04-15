import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  FaHeart,
  FaComment,
  FaShareAlt,
  FaArrowLeft,
} from "react-icons/fa";

import dummyData from "../dummydata/articleData";

const ArticleDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const article = dummyData.find((item) => item.id === parseInt(id));

  if (!article) {
    return <p className="text-center mt-10">Artikel tidak ditemukan.</p>;
  }

  return (
    <main className="bg-[#e6f3ff] min-h-screen px-6 py-4">
      <div className="max-w-4xl mx-auto bg-white rounded-xl p-6 shadow relative">

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 left-4 bg-white rounded-full p-2 border hover:shadow"
        >
          <FaArrowLeft size={20} />
        </button>

        {/* Like & Share */}
        <div className="absolute top-4 right-4 flex gap-2">
          <button className="bg-white rounded-full p-2 border hover:shadow">
            <FaHeart className="text-gray-500" size={20} />
          </button>
          <button className="bg-white rounded-full p-2 border hover:shadow">
            <FaShareAlt className="text-gray-500" size={20} />
          </button>
        </div>

        {/* Content */}
        <h1 className="text-2xl font-bold text-center">{article.title}</h1>
        <p className="text-sm text-center text-blue-600 mt-1">
          Oleh : {article.author}
        </p>
        <p className="text-sm text-center text-gray-500">{article.date}</p>

        <img
          src={article.img}
          alt={article.title}
          className="w-full h-64 object-cover rounded-lg mt-4"
        />

        {/* Likes & Comments (Dummy) */}
        <div className="flex justify-center gap-8 text-sm text-gray-600 mt-4">
          <div className="flex items-center gap-1">
            <FaHeart size={16} className="text-teal-500" /> 120 Likes
          </div>
          <div className="flex items-center gap-1">
            <FaComment size={16} className="text-teal-500" /> 14 Comments
          </div>
        </div>

        <article className="mt-6 text-justify text-sm text-gray-800 leading-relaxed whitespace-pre-line">
          {article.article}
        </article>
      </div>
    </main>
  );
};

export default ArticleDetail;
