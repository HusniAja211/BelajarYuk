import React from "react";

const EditProfileDropdown = ({ onClose }) => {
  return (
    <div className="w-[350px] bg-white rounded-xl shadow-md p-6 relative">
      {/* Header */}
      <div className="flex items-center gap-4 mb-4">
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="Profile"
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <div className="text-sm font-semibold text-gray-900">Your name</div>
          <div className="text-xs text-gray-500">yourname@gmail.com</div>
        </div>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl"
        >
          &times;
        </button>
      </div>

      <hr className="mb-4" />

      {/* Info Fields */}
      <div className="space-y-4 text-sm">
        <div className="flex justify-between text-gray-700">
          <span className="text-gray-500">Name</span>
          <span>your name</span>
        </div>
        <div className="flex justify-between text-gray-700">
          <span className="text-gray-500">Email account</span>
          <span>yourname@gmail.com</span>
        </div>
        <div className="flex justify-between text-gray-700">
          <span className="text-gray-500">Mobile number</span>
          <span className="text-blue-500 cursor-pointer">Add number</span>
        </div>
        <div className="flex justify-between text-gray-700">
          <span className="text-gray-500">Location</span>
          <span>USA</span>
        </div>
      </div>

      <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg text-sm font-semibold">
        Save Change
      </button>
    </div>
  );
};

export default EditProfileDropdown;
