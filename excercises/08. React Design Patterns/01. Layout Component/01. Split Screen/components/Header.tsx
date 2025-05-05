import React, { useState, useEffect } from "react";
import { FaCamera } from "react-icons/fa"; // Import the camera icon

const Header = () => {
  const [profileImage, setProfileImage] = useState<string | null>(null);

  // Load profile image from localStorage on component mount
  useEffect(() => {
    const savedImage = localStorage.getItem("profileImage");
    if (savedImage) {
      setProfileImage(savedImage);
    }
  }, []);

  // Handle image upload and save to localStorage
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);

      // Save the image URL to localStorage
      localStorage.setItem("profileImage", imageUrl);
    }
  };

  return (
    <div className="flex justify-between items-center bg-[#222831] text-white p-4">
      {/* Title on the left */}
      <h2 className="text-xl font-bold">My Dashboard</h2>

      {/* Profile image upload and Logout button on the right */}
      <div className="flex items-center space-x-4">
        <div className="relative">
          <label htmlFor="profile-upload" className="cursor-pointer">
            {profileImage ? (
              <img
                src={profileImage}
                alt="Profile"
                className="w-10 h-10 rounded-full bg-gray-700 object-cover"
              />
            ) : (
              <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">
                <FaCamera className="text-white text-lg" />
              </div>
            )}
          </label>
          <input
            id="profile-upload"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageUpload}
          />
        </div>
        <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded cursor-pointer font-semibold">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Header;