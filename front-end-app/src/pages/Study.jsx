import React from "react";
import Nav from "../components/Navbar";
import Banner from "../components/Banner";
import { FaBook, FaPlayCircle, FaFileAlt } from "react-icons/fa"; // Import FaFileAlt for articles
import VideoList from "../components/VideosList";

const Study = () => {
  return (
    <>
      <Nav />
      <main className="bg-[#e6f3ff] min-h-screen p-6">
        <Banner />

        {/* Popular Categories */}
        <section className="mb-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Popular Categories</h2>
          <div className="flex gap-4 overflow-x-auto pb-2">
            {[ 
              { icon: <FaBook />, label: "E - Book" },
              { icon: <FaPlayCircle />, label: "Video Pembelajaran" },
              { icon: <FaFileAlt />, label: "Artikel" }, // Using FaFileAlt for the Artikel category
              { icon: <span className="font-bold">⏳</span>, label: "LANJUTKAN PROGRES" },
              { icon: <span className="font-bold">➕</span>, label: "LAINNYA" },
            ].map((cat, idx) => (
              <button
                key={idx}
                className="flex items-center gap-2 bg-white shadow-md px-4 py-3 rounded-xl text-sm font-medium text-gray-700 min-w-fit"
              >
                {cat.icon}
                {cat.label}
              </button>
            ))}
          </div>
        </section>

        {/* Popular Videos */}
        <section className="mb-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Popular Videos</h2>
          <VideoList />
        </section>

        {/* Help Button */}
        <div className="fixed bottom-4 right-4">
          <button className="bg-pink-100 text-black px-4 py-2 rounded-full shadow-md flex items-center gap-2">
            <span className="bg-white w-5 h-5 flex items-center justify-center rounded-full text-sm font-bold">?</span>
            <span className="text-sm font-medium">Pusat Bantuan</span>
          </button>
        </div>
      </main>
    </>
  );
};

export default Study;
