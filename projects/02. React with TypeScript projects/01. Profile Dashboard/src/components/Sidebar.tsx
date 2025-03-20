import { FaHome, FaSearch, FaUser, FaBell, FaMoon, FaSun } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { useTheme } from "../context/ThemeContext";

const Sidebar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <aside
      className={`fixed top-0 left-0 h-screen w-24 flex flex-col items-center py-6 space-y-10 shadow-lg border-r ${
        theme === "light" ? "bg-gray-200 text-gray-900 border-gray-300" : "bg-gray-900 text-gray-300 border-gray-700"
      }`}
      aria-label="Sidebar"
    >
      <div className="text-3xl font-bold text-amber-500" aria-label="Logo">
        Zoro
      </div>
      <nav className="flex flex-col items-center space-y-8" aria-label="Main Navigation">
        <button
          className="text-2xl hover:text-amber-500 transition duration-300 cursor-pointer"
          aria-label="Home"
        >
          <FaHome />
        </button>
        <button
          className="text-2xl hover:text-amber-500 transition duration-300 cursor-pointer"
          aria-label="Search"
        >
          <FaSearch />
        </button>
        <button
          className="text-2xl hover:text-amber-500 transition duration-300 cursor-pointer"
          aria-label="Notifications"
        >
          <FaBell />
        </button>
      </nav>
      <div className="mt-auto flex flex-col items-center space-y-8" aria-label="User Settings">
        <button
          onClick={toggleTheme}
          className="text-2xl hover:text-amber-500 transition duration-300 cursor-pointer"
          aria-label="Toggle Theme"
        >
          {theme === "light" ? <FaMoon /> : <FaSun />}
        </button>
        <button
          className="text-2xl hover:text-amber-500 transition duration-300 cursor-pointer"
          aria-label="User Profile"
        >
          <FaUser />
        </button>
        <button
          className="text-2xl hover:text-amber-500 transition duration-300 cursor-pointer"
          aria-label="Settings"
        >
          <IoMdSettings />
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;