import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import dummyCourses from "../dummydata/coursesData";

const CourseChapter = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const course = dummyCourses.find((c) => c.id === id);

  if (!course) return <p>Course not found</p>;

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-600 to-white p-4 text-gray-800">
      <div className="flex justify-between items-start text-white mb-4">
        <div>
          <button
            onClick={() => navigate(-1)}
            className="bg-white text-blue-600 p-2 rounded-lg mb-4 shadow"
          >
            ←
          </button>
          <h1 className="text-2xl font-bold">{course.title}</h1>
          <p className="text-sm">Kelas 11 SMK - Teknik Komputer dan Jaringan</p>
        </div>
      </div>

      <h2 className="font-semibold text-lg mb-2">Semua Bab</h2>
      <div className="space-y-3">
        {course.chapters.map((chapter) => (
          <div
            key={chapter.id}
            onClick={() => navigate(`/course/${id}/chapter/${chapter.id}`)}
            className="flex items-center justify-between bg-white rounded-xl shadow-sm p-3 cursor-pointer hover:bg-blue-50"
          >
            <div className="flex items-center gap-3">
              <div className="bg-gray-200 w-12 h-12 rounded-md text-xs flex items-center justify-center">
                IMG
              </div>
              <div>
                <div className="font-medium">{chapter.title} ⚡</div>
                <div className="w-full bg-gray-200 h-2 rounded mt-1">
                  <div
                    className="bg-green-500 h-2 rounded"
                    style={{ width: `${chapter.progress}%` }}
                  ></div>
                </div>
                <p className="text-xs text-gray-400 mt-0.5">{chapter.progress}%</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseChapter;