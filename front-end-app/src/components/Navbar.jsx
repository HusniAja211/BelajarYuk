import React, { useRef, useState, useEffect } from "react";
import { FaSearch, FaUserAlt, FaTrophy } from "react-icons/fa";
import LogoWeb from "../sharedVar/LogoWeb2";
import ProfileDropdown from "./ProfileDropdown";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const userRef = useRef(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !userRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="w-full bg-white shadow-sm px-4 py-3 flex items-center justify-between relative">
      {/* Kiri: Logo & Navigasi */}
      <div className="flex items-center gap-6">
        <LogoWeb />
        <nav className="flex items-center gap-5 text-sm font-medium text-black">
          <a href="/home">Home</a>
          <a href="/study">Study</a>
          <a href="/save">Save</a>
          <a href="/article">Article</a>
          <a href="/chatai">Chat AI</a>
        </nav>
      </div>

      {/* Kanan: Search, Trophy, User */}
      <div className="flex items-center gap-3 relative">
        <div className="relative">
          <input
            type="text"
            placeholder="Search now..."
            className="rounded-full pl-10 pr-4 py-2 text-sm bg-gray-100 shadow-md"
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>

        <FaTrophy className="text-gray-700 text-2xl" />

        <div ref={userRef} onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
          <FaUserAlt className="text-gray-700 text-2xl" />
        </div>

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
