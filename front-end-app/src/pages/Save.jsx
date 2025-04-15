import React from "react";
import Navbar from "../components/Navbar";
import CourseCard from "../components/CourseCard";
import popularCourses from "../dummydata/coursesData";

const Save = () => {
  return (
    <>
      <Navbar />
      <main className="bg-[#e6f3ff] min-h-screen p-6">
        <div className="grid grid-cols-4 gap-4">
                {popularCourses.map((course, index) => (
                <CourseCard key={index} {...course} />
                ))}
        </div>
      </main>
    </>
  );
};

export default Save;
