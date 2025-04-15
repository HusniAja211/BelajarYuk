import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch, FaUserAlt, FaTrophy } from "react-icons/fa";
import LogoWeb from "../sharedVar/LogoWeb2";
import ProfileDropdown from "./ProfileDropdown";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const userRef = useRef(null);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  // Function to handle outside click and close dropdown
  const handleClickOutside = (event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target) &&
      !userRef.current.contains(event.target)
    ) {
      setIsOpen(false);
    }
  };

  // Add and remove event listener for outside clicks
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Navigasi ke halaman pencarian saat search input di-klik
  const handleSearchFocus = () => {
    navigate("/search");
  };

  return (
    <header className="w-full bg-white shadow-sm px-4 py-3 flex items-center justify-between relative">
      {/* Left Section: Logo & Navigation */}
      <div className="flex items-center gap-6">
        <LogoWeb />
        <nav className="flex items-center gap-5 text-sm font-medium text-black">
          <a href="/home">Home</a>
          <a href="/study">Study</a>
          <a href="/video">Video</a>
          <a href="/save">Save</a>
          <a href="/article">Article</a>
          <a href="/chatai">Chat AI</a>
        </nav>
      </div>

      {/* Right Section: Search, Trophy, User */}
      <div className="flex items-center gap-3 relative">
        <div className="relative">
          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search now..."
            className="rounded-full pl-10 pr-4 py-2 text-sm bg-gray-100 shadow-md cursor-pointer"
            onFocus={handleSearchFocus} // Navigasi saat search input fokus
            readOnly // Supaya tidak ada input manual
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>

        {/* Trophy Icon */}
        <FaTrophy className="text-gray-700 text-2xl" />

        {/* User Icon & Profile Dropdown */}
        <div ref={userRef} onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
          <FaUserAlt className="text-gray-700 text-2xl" />
        </div>

        {/* Profile Dropdown Menu */}
        {isOpen && (
          <div ref={dropdownRef} className="absolute right-0 top-16 z-50">
            <ProfileDropdown />
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
