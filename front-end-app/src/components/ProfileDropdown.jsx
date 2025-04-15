import React, { useState } from "react";
import { FaUserAlt, FaSignOutAlt, FaBell } from "react-icons/fa";
import { SlSettings } from "react-icons/sl";
import EditProfileDropdown from "./EditProfileDropdown";
import SettingsDropdown from "./SettingsDropdown";

const ProfileDropdown = () => {
  const [showEditProfile, setShowEditProfile] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  return (
    <div className="relative">
      {/* Main Dropdown */}
      <div className="w-72 bg-white rounded-2xl shadow-lg p-4">
        {/* Header */}
        <header className="flex items-center gap-4 mb-4">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="User profile"
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <p className="font-medium text-gray-800">Your name</p>
            <div className="text-xs text-gray-500">
              <strong className="text-blue-600">Level 7</strong>
              <div>4.045 XP / 5000 XP</div>
            </div>
          </div>
        </header>

        <hr className="mb-3" />

        {/* Navigation */}
        <ul className="text-sm space-y-2">
          <li>
            <button
              onClick={() => setShowEditProfile(true)}
              className="w-full flex items-center justify-between hover:bg-gray-100 p-2 rounded-lg"
            >
              <div className="flex items-center gap-2">
                <FaUserAlt />
                <span>My Profile</span>
              </div>
              <span className="text-gray-400">{">"}</span>
            </button>
          </li>
          <li>
            <button
              onClick={() => setShowSettings(true)}
              className="w-full flex items-center justify-between hover:bg-gray-100 p-2 rounded-lg"
            >
              <div className="flex items-center gap-2">
                <SlSettings />
                <span>Settings</span>
              </div>
              <span className="text-gray-400">{">"}</span>
            </button>
          </li>
          <li>
            <button className="w-full flex items-center justify-between hover:bg-gray-100 p-2 rounded-lg">
              <div className="flex items-center gap-2">
                <FaBell />
                <span>Notification</span>
              </div>
              <span className="text-blue-500 text-xs">Allow</span>
            </button>
          </li>
          <li>
            <button className="w-full flex items-center gap-2 text-red-500 hover:bg-gray-100 p-2 rounded-lg">
              <FaSignOutAlt />
              <span>Log Out</span>
            </button>
          </li>
        </ul>
      </div>

      {/* Nested Dropdowns */}
      {showEditProfile && (
        <div className="absolute top-0 right-full mr-2">
          <EditProfileDropdown onClose={() => setShowEditProfile(false)} />
        </div>
      )}

      {showSettings && (
        <div className="absolute top-0 right-full mr-2">
          <SettingsDropdown onClose={() => setShowSettings(false)} />
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
