import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold text-gray-800">404</h1>
        <p className="text-xl text-gray-600 mt-2">Oops! Page not found.</p>
        <p className="text-sm text-gray-500 mt-1 mb-4">
          The page you are looking for doesn’t exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-block mt-4 px-6 py-2 bg-black text-white rounded hover:bg-gray-800 transition">
          Go to Homepage
        </Link>
      </div>
    </main>
  );
}

export default NotFound;
