import React from "react";

const LoadingModal = ({ onCancel }) => {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="loading-title"
      className="fixed inset-0 flex items-center justify-center bg-black/30 z-50"
    >
      <section className="bg-white rounded-2xl w-72 p-6 text-center shadow-lg">
        <header>
          <div className="flex justify-center mb-2">
            <div className="animate-spin h-10 w-10 rounded-full border-4 border-blue-400 border-t-transparent"></div>
          </div>
        </header>

        <div>
          <p
            id="loading-title"
            className="text-sm text-gray-700 font-light tracking-wide"
          >
            Loading...
          </p>
        </div>

        <hr className="my-4 border-t" />

        <footer>
          <button
            onClick={onCancel}
            className="text-blue-500 text-sm hover:underline font-medium"
          >
            Cancel
          </button>
        </footer>
      </section>
    </div>
  );
};

export default LoadingModal;
