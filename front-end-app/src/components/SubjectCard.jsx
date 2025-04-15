import React, { useState, useRef, useEffect } from "react";
import dummyCourses from "../dummydata/coursesData"; // Pastikan ini sudah di-import
import "../styles/custome.css"; // Pastikan ini sudah di-import

const SubjectCard = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Menyimpan indeks card yang aktif
  const scrollContainerRef = useRef(null);
  const cardWidth = 150; // Tentukan lebar kartu (untuk perhitungan scroll)

  useEffect(() => {
    // Event listener untuk menangani pergerakan scroll
    const container = scrollContainerRef.current;

    const handleScroll = () => {
      if (container) {
        // Menghitung index card yang sedang aktif berdasarkan posisi scroll
        const index = Math.floor(container.scrollLeft / cardWidth);
        setActiveIndex(index); // Memperbarui indeks card yang aktif
      }
    };

    // Menambahkan event listener saat komponen dimount
    container.addEventListener("scroll", handleScroll);

    // Membersihkan event listener saat komponen di-unmount
    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <>
      <h2 className="text-lg font-semibold mb-4">Mata Pelajaran</h2>

      <section className="relative mb-6">
        {/* Container Scroll */}
        <div
          ref={scrollContainerRef}
          className="flex items-center gap-4 overflow-x-auto mb-6 px-10"
        >
          {/* Loop untuk menampilkan dummy data sesuai dengan index */}
          {dummyCourses.map((course, idx) => {
            return (
              <div
                key={idx}
                className={`flex flex-col items-center text-xs font-medium text-center w-[150px] ${
                  idx === activeIndex ? "border-2 border-blue-500" : ""
                }`} // Menambahkan border biru hanya untuk card yang aktif
              >
                <div className="w-12 h-12 rounded-full bg-white shadow flex items-center justify-center">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <span className="mt-1 text-title">{course.title}</span>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default SubjectCard;
