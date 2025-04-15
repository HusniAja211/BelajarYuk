import React from 'react';
import { IoIosArrowDown } from "react-icons/io";

const SettingsDropdown = ({ onClose }) => {
  return (
    <div className="absolute right-12 top-14 bg-white rounded-xl shadow-lg w-64 p-4 z-50">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-base font-semibold">Settings</h3>
        <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-lg">
          &times;
        </button>
      </div>
      <hr className="mb-4" />

      <div className="flex justify-between items-center text-sm text-gray-700 mb-3">
        <span>Theme</span>
        <span className="flex items-center gap-1 text-gray-500 cursor-pointer">
          Light <IoIosArrowDown size={14} />
        </span>
      </div>
    </div>
  );
};

export default SettingsDropdown;
