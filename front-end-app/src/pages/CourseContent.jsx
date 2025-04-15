import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import dummyCourses from "../dummydata/coursesData";
import CourseSidebar from "../components/CourseSidebar"; // Import sidebar

const CourseContent = () => {
  const { id, chapterId } = useParams();
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State untuk sidebar

  const course = dummyCourses.find((c) => c.id === id);
  const chapter = course?.chapters.find((ch) => ch.id === chapterId);

  if (!course || !chapter) {
    return (
      <div className="p-4 text-red-600 text-center">
        Konten tidak ditemukan.
      </div>
    );
  }

  // Toggle sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-white p-5 rounded-[2rem] shadow-md relative">
      {/* Header */}
      <div className="flex justify-between items-center border-b pb-2 mb-4">
        {/* Tombol Kembali */}
        <button
          onClick={() => navigate("/study")}
          className="text-xl p-2 rounded-md text-gray-600 hover:bg-gray-200 z-10"
        >
          <FiArrowLeft />
        </button>

        {/* Judul Course */}
        <h2 className="text-md font-semibold text-center mx-auto">
          {course.title.toUpperCase()} : {chapter.title.toLowerCase()}
        </h2>

        {/* Burger Menu untuk Sidebar */}
        <div
          className="text-blue-600 p-2 cursor-pointer"
          onClick={toggleSidebar}
        >
          <div className="w-6 h-6 rounded bg-blue-200 flex items-center justify-center flex-col gap-[2px]">
            <span className="w-3 h-0.5 bg-blue-700" />
            <span className="w-3 h-0.5 bg-blue-700" />
            <span className="w-3 h-0.5 bg-blue-700" />
          </div>
        </div>
      </div>

      {/* Konten */}
      <div className="text-[15px] text-gray-800 space-y-4 leading-relaxed">
        <h3 className="font-bold border-b inline-block mb-1">
          Materi: {chapter.title}
        </h3>
        <p>{chapter.content}</p>

        {/* Opsional: Tambahkan gambar jika datanya ada */}
        {chapter.image && (
          <div className="flex justify-center my-3">
            <img
              src={chapter.image}
              alt={chapter.title}
              className="w-full max-w-[500px] rounded"
            />
          </div>
        )}
      </div>

      {/* Sidebar */}
      {isSidebarOpen && <CourseSidebar onClose={toggleSidebar} course={course} />}
    </div>
  );
};

export default CourseContent;
