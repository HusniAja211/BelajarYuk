import React from "react";
import { FaCheck, FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const CourseSidebar = ({ onClose, course }) => {
  const navigate = useNavigate();

  const progress = 28; // Bisa diganti dengan data dinamis
  const completedChapters = [
    "Pengenalan kelas",
    "Pengertian dan jenis-jenis matriks",
  ];

  const chapters = course?.chapters || []; // Ambil chapters dari props course

  return (
    <div
      className={`fixed top-0 right-0 w-[300px] bg-gray-700 text-white h-full z-50 p-4 shadow-xl transform transition-all duration-300 ${
        onClose ? "translate-x-0" : "translate-x-full"
      }`} // Animasi untuk sidebar
    >
      {/* Header */}
      <div className="flex items-center mb-4">
        <button
          onClick={onClose}
          className="w-8 h-8 rounded-lg bg-white text-black flex items-center justify-center mr-2"
        >
          <FaArrowLeft />
        </button>
        <h2 className="text-sm font-bold uppercase">Matematika : Matriks</h2>
      </div>

      {/* Progress */}
      <div className="mb-4">
        <div className="text-sm font-semibold mb-1">{progress}%</div>
        <div className="w-full h-3 bg-white rounded-full overflow-hidden">
          <div
            className="h-full bg-green-500 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Chapter List */}
      <div className="space-y-3 mt-6">
        {chapters.map((chapter) => (
          <div
            key={chapter.id} // Gunakan id chapter, bukan indeks
            className="flex justify-between items-center border-b border-white pb-1 cursor-pointer hover:text-green-400 transition"
            onClick={() => {
              // Menavigasi ke URL chapter yang benar
              // Pastikan format URL tetap konsisten dengan `chapter-{id}`
              navigate(`/course/${course.id}/chapter/${chapter.id}`);
              onClose(); // Tutup sidebar setelah berpindah
            }}
          >
            <span className="font-semibold text-[15px]">{chapter.title}</span>
            {completedChapters.includes(chapter.title) && (
              <FaCheck className="text-green-400" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseSidebar;
