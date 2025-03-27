import React, { useState, useEffect } from 'react';
import { FiSearch } from 'react-icons/fi';

const Navigation = () => {
  const [profilePic, setProfilePic] = useState<string | null>(null);

  useEffect(() => {
    const storedProfilePic = localStorage.getItem('profilePic');
    setProfilePic(storedProfilePic);
  }, []);

  const handleProfilePicUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        setProfilePic(result);
        localStorage.setItem('profilePic', result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <nav className="flex justify-between md:justify-end md:gap-14 md:px-12 items-center p-4 bg-zinc-950 text-white">
        <h2 className='font-semibold text-xl md:mr-240'>Blogs</h2>
      <div className="relative flex items-center">
        <input
          type="text"
          placeholder="Search..."
          className="w-48 p-2 pl-10 rounded-md bg-zinc-800 text-white focus:outline-none"
        />
        <FiSearch className="absolute left-3 text-gray-400" />
      </div>
      <div className="relative">
        <label className="cursor-pointer">
          {profilePic ? (
            <img
              src={profilePic}
              alt="Profile"
              className="w-10 h-10 rounded-full object-cover"
            />
          ) : (
            <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center">
              <span className="text-sm">+</span>
            </div>
          )}
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleProfilePicUpload}
          />
        </label>
      </div>
    </nav>
  );
};

export default Navigation;