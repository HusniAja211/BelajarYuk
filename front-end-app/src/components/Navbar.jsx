import { FaSearch, FaUserAlt, FaTrophy } from "react-icons/fa";
import { SlSettings } from "react-icons/sl";

const Navbar = () => {
  return (
    <header className="w-full bg-white shadow-sm px-4 py-3 flex items-center justify-between rounded-b-xl">
      <div className="flex items-center gap-6">
        <img src="/logo.svg" alt="Logo" className="w-10 h-10" />
        <nav className="flex items-center gap-5 text-sm font-medium text-black">
          <a href="#" className="text-blue-600 underline">Home</a>
          <a href="#">Study</a>
          <a href="#">Save</a>
          <a href="#">Services</a>
          <a href="#">Chat AI</a>
        </nav>
      </div>

      <div className="flex items-center gap-3">
        <div className="relative">
          <input
            type="text"
            placeholder="Search now..."
            className="rounded-full pl-10 pr-4 py-2 text-sm bg-gray-100 shadow-md"
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>

        <button className="bg-blue-500 p-2 rounded-full text-white">
          <SlSettings size={16} />
        </button>

        <div className="bg-blue-500 px-3 py-1 rounded-lg text-white text-xs flex items-center gap-2">
          <div className="w-5 h-5 rounded-full border-2 border-white bg-green-400"></div>
          <div>
            <div className="font-bold text-[10px]">level 7</div>
            <div className="text-[10px]">XP 4.045 / 5.000 xp</div>
          </div>
        </div>

        <FaTrophy className="text-gray-700" />
        <FaUserAlt className="text-gray-700" />
      </div>
    </header>
  );
};

export default Navbar;
