import { useParams, useNavigate } from "react-router-dom";  // <-- Pastikan useParams sudah diimport
import { FaHeart, FaComment, FaShareAlt, FaArrowLeft } from 'react-icons/fa';

import dummyData from "../dummydata/articleData";

const ArticleDetail = () => {
  const { id } = useParams();  // <-- 'id' diambil dari URL params
  const navigate = useNavigate();
  
  console.log(id); // Cek apakah id sudah diambil dengan benar
  
  // Cari artikel berdasarkan 'id'
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
          className="absolute top-4 left-4 bg-white rounded-full p-2 border"
        >
          <FaArrowLeft size={20} />
        </button>

        {/* Like & Share */}
        <div className="absolute top-4 right-4 flex gap-2">
          <button className="bg-white rounded-full p-2 border">
            <Heart className="text-gray-500" size={20} />
          </button>
          <button className="bg-white rounded-full p-2 border">
            <Share2 className="text-gray-500" size={20} />
          </button>
        </div>

        {/* Content */}
        <h1 className="text-2xl font-bold text-center">{article.title}</h1>
        <p className="text-sm text-center text-blue-600 mt-1">Oleh : {article.author}</p>
        <p className="text-sm text-center text-gray-500">{article.date}</p>

        <img
          src={article.img}
          alt={article.title}
          className="w-full h-64 object-cover rounded-lg mt-4"
        />

        {/* Dummy likes/comments */}
        <div className="flex justify-center gap-8 text-sm text-gray-600 mt-4">
          <div className="flex items-center gap-1">
            <Heart size={16} className="text-teal-500" /> 120 Likes
          </div>
          <div className="flex items-center gap-1">
            <MessageCircle size={16} className="text-teal-500" /> 14 Comments
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
