import { useState, useEffect } from "react";
import { FaCamera } from "react-icons/fa";
import Tabs from "./Tabs";
import { useTheme } from "../context/ThemeContext";

const Profile = () => {
  const { theme } = useTheme();
  const [bannerUrl, setBannerUrl] = useState(() => localStorage.getItem("bannerUrl") || "");
  const [profileUrl, setProfileUrl] = useState(() => localStorage.getItem("profileUrl") || "");
  const [isSubscribed, setIsSubscribed] = useState(() => localStorage.getItem("isSubscribed") === "true");

  useEffect(() => {
    localStorage.setItem("isSubscribed", String(isSubscribed));
  }, [isSubscribed]);

  useEffect(() => {
    localStorage.setItem("bannerUrl", bannerUrl);
  }, [bannerUrl]);

  useEffect(() => {
    localStorage.setItem("profileUrl", profileUrl);
  }, [profileUrl]);

  const handleBannerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setBannerUrl(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleProfileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setProfileUrl(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={`ml-18 w-full flex flex-col ${theme === "light" ? "bg-gray-200 text-gray-900" : "bg-gray-900 text-gray-300"} min-h-screen`}>
      <div className="relative w-7/8 h-60 bg-gray-700 rounded-lg mt-4 ml-14 shadow-lg">
        {bannerUrl && (
          <img
            src={bannerUrl}
            alt="Background"
            className="w-full h-full object-cover rounded-lg"
          />
        )}
        <button
          className="absolute bottom-4 right-4 bg-gray-800 p-2 rounded-full shadow-md hover:bg-gray-700 transition"
          aria-label="Upload Banner"
        >
          <label htmlFor="upload-banner" className="cursor-pointer">
            <FaCamera className="text-gray-300 hover:text-white" />
          </label>
          <input
            type="file"
            id="upload-banner"
            accept="image/*"
            onChange={handleBannerChange}
            className="hidden"
          />
        </button>
      </div>

      <div className="relative -mt-10 ml-16 w-36 h-36 rounded-full bg-gray-700 border-4 border-gray-900 shadow-lg">
        {profileUrl && (
          <img
            src={profileUrl}
            alt="Profile"
            className="w-full h-full object-cover rounded-full"
          />
        )}
        <button
          className="absolute bottom-1 right-1 bg-gray-800 p-2 rounded-full shadow-md hover:bg-gray-700 transition"
          aria-label="Upload Profile Picture"
        >
          <label htmlFor="upload-profile" className="cursor-pointer">
            <FaCamera className="text-gray-300 hover:text-white" />
          </label>
          <input
            type="file"
            id="upload-profile"
            accept="image/*"
            onChange={handleProfileChange}
            className="hidden"
          />
        </button>
      </div>

      <div className="ml-56 -mt-24">
        <h2 className="text-xl font-bold hover:text-gray-100 transition">Abhijeet Singh</h2>
        <p className="text-sm text-gray-500">@abhijeetsingh</p>
        <div className="flex items-center justify-between w-7/8 h-10 -mt-1">
          <p className={`${theme === 'light' ? 'text-gray-500' : 'text-gray-300'} font-semibold`}>10M subscribers</p>
          <button
            onClick={() => setIsSubscribed((prev) => !prev)}
            className={`px-6 py-2 rounded-full shadow-md transition cursor-pointer text-white ${
              isSubscribed ? "bg-amber-600" : "bg-red-600"
            }`}
          >
            {isSubscribed ? "Subscribed" : "Subscribe"}
          </button>
        </div>
        <p className="text-gray-500 text-sm -mt-2">
          Hello, I'm Abhijeet Singh. I'm a fullstack developer <span className="text-gray-400 cursor-pointer">more...</span>
        </p>
      </div>

      <div className="w-full mt-6">
        <Tabs />
      </div>
    </div>
  );
};

export default Profile;