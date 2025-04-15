// src/components/BackButton.jsx
import React from "react";
import { FaArrowLeft } from "react-icons/fa";

const BackButton = ({ onClick }) => (
  <button
    onClick={onClick}
    className="p-2 bg-white rounded-full shadow-md mr-4 relative z-20"
  >
    <FaArrowLeft />
  </button>
);

export default BackButton;
