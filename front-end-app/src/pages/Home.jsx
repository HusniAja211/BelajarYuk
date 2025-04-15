import React from "react";
import CourseCard from "../components/CourseCard";
import Navbar from "../components/Navbar";


const dummyCourses = [
    {
      title: "Matematika Dasar",
      lessons: 28,
      duration: "6h 30min",
      rating: 4.9,
    },
    {
      title: "Fisika untuk Pemula",
      lessons: 20,
      duration: "5h 15min",
      rating: 4.7,
    },
    {
      title: "Belajar Kimia Organik",
      lessons: 25,
      duration: "7h 00min",
      rating: 4.8,
    },
    {
      title: "Bahasa Indonesia",
      lessons: 30,
      duration: "8h 20min",
      rating: 4.9,
    },
    {
      title: "Biologi SMA",
      lessons: 18,
      duration: "4h 45min",
      rating: 4.6,
    },
    {
      title: "Geografi Dunia",
      lessons: 15,
      duration: "3h 30min",
      rating: 4.5,
    },
    {
      title: "Sejarah Indonesia",
      lessons: 22,
      duration: "6h 10min",
      rating: 4.8,
    },
    {
      title: "Matematika Lanjutan",
      lessons: 32,
      duration: "9h 00min",
      rating: 4.9,
    },
    {
      title: "Pemrograman Dasar",
      lessons: 35,
      duration: "10h 15min",
      rating: 5.0,
    },
    {
      title: "Bahasa Inggris",
      lessons: 27,
      duration: "6h 50min",
      rating: 4.7,
    },
    {
      title: "Ekonomi Mikro",
      lessons: 16,
      duration: "4h 10min",
      rating: 4.4,
    },
    {
      title: "Sosiologi Modern",
      lessons: 19,
      duration: "4h 40min",
      rating: 4.6,
    },
    {
      title: "Statistik Dasar",
      lessons: 21,
      duration: "5h 30min",
      rating: 4.5,
    },
    {
      title: "Etika Profesi",
      lessons: 12,
      duration: "3h 20min",
      rating: 4.3,
    },
    {
      title: "Kewirausahaan",
      lessons: 14,
      duration: "3h 45min",
      rating: 4.7,
    },
    {
      title: "Seni Budaya",
      lessons: 18,
      duration: "4h 00min",
      rating: 4.2,
    },
    {
      title: "Teknologi Informasi",
      lessons: 26,
      duration: "6h 40min",
      rating: 4.8,
    },
    {
      title: "Bahasa Jepang Dasar",
      lessons: 17,
      duration: "4h 35min",
      rating: 4.6,
    },
    {
      title: "Psikologi Remaja",
      lessons: 20,
      duration: "5h 00min",
      rating: 4.7,
    },
    {
      title: "Desain Grafis",
      lessons: 24,
      duration: "5h 50min",
      rating: 4.9,
    },
  ];
  

const Home = () => {
  return (
    <main className="p-6 bg-gradient-to-b from-blue-50 to-white min-h-screen">
        {/* Navbar */}
        <Navbar />
      

      {/* Header */}
      <header className="mb-6">
        <h1 className="text-2xl font-bold">Hi, User</h1>
        <p className="text-sm text-gray-500">Text text text text text text text</p>
      </header>

      {/* Banner */}
      <section className="mb-6">
        <div className="bg-blue-200 h-32 rounded-xl shadow-inner" />
      </section>

      {/* Kategori */}
      <section className="flex items-center gap-4 overflow-x-auto mb-6">
        <div className="flex flex-col items-center text-xs font-medium text-center">
          <div className="w-12 h-12 rounded-full bg-white shadow flex items-center justify-center">
            <img src="/icon.png" alt="Matematika" className="w-6" />
          </div>
          <span className="mt-1">MATEMATIKA</span>
        </div>
        {[...Array(7)].map((_, idx) => (
          <div key={idx} className="flex flex-col items-center text-xs text-gray-500">
            <div className="w-10 h-10 rounded-full bg-gray-200" />
            <span className="mt-1">IPSUM</span>
          </div>
        ))}
        <div className="flex flex-col items-center text-xs text-gray-500">
          <div className="w-10 h-10 rounded-full bg-gray-200" />
          <span className="mt-1">Lihat Semua</span>
        </div>
      </section>

      {/* Pelajaran Populer */}
      <section className="mb-6">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-lg font-semibold">Pelajaran populer</h2>
          <a href="#" className="text-sm text-blue-600 font-medium">Lihat Semua</a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {dummyCourses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
