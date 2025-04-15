import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiSearch, FiSettings } from "react-icons/fi";
import CourseCard from "../components/CourseCard"; // Importing the CourseCard component
import dummyCourses from "../dummydata/coursesData"; // Importing dummy courses data

const Search = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState(""); // State to store the search query

  // Filter courses based on the search query
  const filteredCourses = dummyCourses.filter(course =>
    course.title.toLowerCase().includes(query.toLowerCase()) // Case-insensitive filtering
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white p-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <button className="bg-white p-2 rounded-lg shadow" onClick={() => navigate(-1)}>
          ←
        </button>
        <h1 className="text-2xl font-semibold text-gray-800">Search</h1>
        <div className="flex gap-3">
          <button className="bg-white p-2 rounded-lg shadow">
            <FiSettings size={20} />
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="flex items-center bg-white px-4 py-2 rounded-xl shadow-md mb-4 max-w-2xl mx-auto">
        <FiSearch className="text-gray-400 mr-2" />
        <input
          type="text"
          placeholder="Search now..."
          className="w-full pl-10 pr-4 py-2 text-sm"
          value={query}
          onChange={(e) => setQuery(e.target.value)} // Update query on input change
        />
      </div>

      {/* Course Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course, index) => (
            <CourseCard
              key={index}
              id={course.title} // Assuming the course title is unique; otherwise, use a different unique ID
              {...course} // Spread all course props
            />
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-4">No results found</p>
        )}
      </div>
    </div>
  );
};

export default Search;
