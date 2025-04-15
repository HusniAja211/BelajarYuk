import React from "react";

const ErrorAlert = ({ message, onClose }) => {
  return (
    // Dialog area: pakai <dialog> jika native, atau div + role="alertdialog"
    <div
      role="alertdialog"
      aria-labelledby="error-title"
      aria-describedby="error-desc"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
    >
      <section
        className="bg-white rounded-xl shadow-lg p-6 w-80 text-center"
        aria-modal="true"
      >
        {/* Judul */}
        <header>
          <h2
            id="error-title"
            className="text-lg font-semibold text-red-600 mb-2"
          >
            Error!
          </h2>
        </header>

        {/* Isi pesan */}
        <div>
          <p id="error-desc" className="text-gray-700 text-sm mb-4">
            {message || "Maaf, terjadi kesalahan. Silakan coba lagi."}
          </p>
        </div>

        {/* Tombol aksi */}
        <footer>
          <button
            onClick={onClose}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md text-sm font-medium"
          >
            OK
          </button>
        </footer>
      </section>
    </div>
  );
};

export default ErrorAlert;
