import React, { useState } from "react";
import Navbar from "../components/Navbar";
import CourseCard from "../components/CourseCard";
import Pagination from "../components/Pagination";
import SubjectCard from "../components/SubjectCard";
import Header from "../components/Header";
import Banner from "../components/Banner";
import dummyCourses from "../dummydata/coursesData";

const coursesPerPage = 12;

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(dummyCourses.length / coursesPerPage);
  const startIndex = (currentPage - 1) * coursesPerPage;
  const paginatedCourses = dummyCourses.slice(startIndex, startIndex + coursesPerPage);
  const popularCourses = dummyCourses.slice(0, 4);

  return (
    <>
      <Navbar />

      <main className="relative p-6 bg-gradient-to-b from-blue-50 to-white min-h-screen">
        <Header />
        <Banner />
        <SubjectCard />

        <section className="mb-6">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-lg font-semibold">Pelajaran Populer</h2>
            <a href="#" className="text-sm text-blue-600 font-medium">Lihat Semua</a>
          </div>

          <div className="grid grid-cols-4 gap-4">
            {popularCourses.map((course, index) => (
              <CourseCard key={index} {...course} />
            ))}
          </div>
        </section>

        <section className="mb-6">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-lg font-semibold">Pelajaran Lainnya</h2>
            <a href="#" className="text-sm text-blue-600 font-medium">Lihat Semua</a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {paginatedCourses.map((course, index) => (
              <CourseCard key={index} {...course} />
            ))}
          </div>
        </section>

        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      </main>
    </>
  );
};

export default Home;
