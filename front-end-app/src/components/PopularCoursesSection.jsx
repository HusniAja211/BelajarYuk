import React from 'react'; 
const PopularCoursesSection = ({ courses }) => (
    <section className="mb-6">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-lg font-semibold">Pelajaran populer</h2>
        <a href="#" className="text-sm text-blue-600 font-medium">
          Lihat Semua
        </a>
      </div>
  
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {courses.map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </div>
    </section>
  );
  
  export default PopularCoursesSection;