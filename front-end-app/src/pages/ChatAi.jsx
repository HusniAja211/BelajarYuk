import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const ChatAi = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4 rounded-[1.5rem]">
      {/* Header */}
      <div className="w-full max-w-2xl text-center mb-8 relative">
        <button
          onClick={() => navigate(-1)}
          className="absolute top-0 left-0 bg-white border border-gray-300 rounded-lg w-10 h-10 flex items-center justify-center hover:shadow"
        >
          <FaArrowLeft size={18} className="text-gray-600" />
        </button>
        <h1 className="text-xl font-medium text-gray-600">Chat with AI!</h1>
      </div>

      {/* Card */}
      <div className="bg-white rounded-xl shadow-md p-8 max-w-md w-full text-center">
        <div className="w-16 h-16 mx-auto rounded-full bg-blue-600 mb-6" />
        <p className="text-gray-500 mb-6">
          Hello! Nice to see you here! By pressing the "Start chat" button, you
          agree to have your personal data processed as described in our Privacy Policy.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition">
          Start chat
        </button>
      </div>

      {/* Footer */}
      <footer className="mt-10 text-sm text-gray-500">
        Powered by <span className="font-semibold text-gray-700">BelajarYuk</span>
      </footer>
    </div>
  );
};

export default ChatAi;
