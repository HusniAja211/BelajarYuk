import React, { useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaPlay, FaStop, FaStepForward, FaStepBackward, FaThumbsUp } from "react-icons/fa";
import dummyVideos from "../dummydata/videoData"; // Mengimpor data video

const WatchVideo = () => {
  const { id } = useParams(); // Mengambil parameter ID dari URL
  const navigate = useNavigate(); // Untuk navigasi kembali
  const iframeRef = useRef(null); // Ref untuk iframe

  // Mencari video berdasarkan ID
  const video = dummyVideos.find((video) => video.id === parseInt(id));

  // Jika video tidak ditemukan, tampilkan pesan error
  if (!video) {
    return <p>Video tidak ditemukan.</p>;
  }

  // Navigate back to the Video page
  const handleBackButtonClick = () => {
    navigate("/video"); // Kembali ke halaman video list
  };

  // Play video
  const handlePlay = () => {
    iframeRef.current.contentWindow.postMessage(
      '{"event":"command","func":"playVideo","args":""}',
      '*'
    );
  };

  // Pause video
  const handleStop = () => {
    iframeRef.current.contentWindow.postMessage(
      '{"event":"command","func":"pauseVideo","args":""}',
      '*'
    );
  };

  // Next video (bisa disesuaikan)
  const handleNext = () => {
    const nextVideo = dummyVideos.find((video) => video.id === parseInt(id) + 1);
    if (nextVideo) {
      navigate(`/watch/${nextVideo.id}`);
    }
  };

  // Previous video (bisa disesuaikan)
  const handlePrevious = () => {
    const previousVideo = dummyVideos.find((video) => video.id === parseInt(id) - 1);
    if (previousVideo) {
      navigate(`/watch/${previousVideo.id}`);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-500 to-blue-300 flex flex-col items-center justify-start p-4">
      <header className="w-full max-w-5xl">
        <nav className="mb-4">
          <button className="bg-white rounded-full p-2 shadow-md" onClick={handleBackButtonClick}>
            <FaArrowLeft className="text-xl" />
          </button>
        </nav>
      </header>

      <section className="text-center max-w-3xl">
        <h1 className="text-white text-2xl font-bold mb-4">
          Pembelajaran Interaktif: {video.title} {/* Menampilkan judul video */}
        </h1>
      </section>

      <section className="relative w-full max-w-3xl aspect-video bg-black rounded-2xl overflow-hidden shadow-xl">
        {/* Menggunakan iframe untuk menampilkan video YouTube */}
        <iframe
          ref={iframeRef}
          width="100%"
          height="315"
          src={video.tautan}
          title={`Video Pembelajaran ${video.title}`}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </section>

      <section className="mt-6 flex flex-wrap gap-4 justify-center max-w-3xl" aria-label="Kontrol Video">
        <button
          className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-6 rounded flex items-center gap-2"
          onClick={handlePlay}
        >
          <FaPlay /> Mulai
        </button>
        <button
          className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-6 rounded flex items-center gap-2"
          onClick={handleStop}
        >
          <FaStop /> Berhenti
        </button>
        <button
          className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-6 rounded flex items-center gap-2"
          onClick={handleNext}
        >
          <FaStepForward /> Lanjut
        </button>
        <button
          className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-6 rounded flex items-center gap-2"
          onClick={handlePrevious}
        >
          <FaStepBackward /> Kembali
        </button>
      </section>

      <footer className="mt-8 text-white text-center max-w-3xl">
        <p>
          Sumber: <a href="https://www.BelajarYuk.com" className="underline">www.BelajarYuk.com</a>
        </p>
        <p className="mt-2 text-sm">Ikuti kami di media sosial untuk lebih banyak konten pembelajaran:</p>
        <div className="flex justify-center">
          <button className="mt-3 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded flex items-center gap-2">
            <FaThumbsUp /> Berlangganan
          </button>
        </div>
      </footer>
    </main>
  );
};

export default WatchVideo;
