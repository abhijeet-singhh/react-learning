import { FaHome, FaInfoCircle, FaPhone } from "react-icons/fa";
import Card from "./Card";
import About from "./About";
import { GoProjectSymlink } from "react-icons/go";
import { SiCoursera } from "react-icons/si";
import Contact from "./Contact";
import { useState } from "react";
import { useTheme } from "../context/ThemeContext";

const tabs = [
  {
    id: "home",
    icon: <FaHome />,
    label: "Home",
    content: (
      <div className="grid grid-cols-3 gap-4">
        {Array.from({ length: 6 }).map((_, index) => (
          <Card
            key={index}
            title={`Welcome Card ${index + 1}`}
            description="Explore the amazing features of our platform."
            image={`https://via.placeholder.com/150?text=Card+${index + 1}`}
            link="#"
          />
        ))}
      </div>
    ),
  },
  {
    id: "about",
    icon: <FaInfoCircle />,
    label: "About",
    content: <About />,
  },
  {
    id: "projects",
    icon: <GoProjectSymlink />,
    label: "Projects",
    content: (
      <div className="grid grid-cols-3 gap-4">
        {Array.from({ length: 6 }).map((_, index) => (
          <Card
            key={index}
            title={`Project ${index + 1}`}
            description={`This is an overview of Project ${index + 1}, showcasing its features and benefits.`}
            image=""
            link="#"
          />
        ))}
      </div>
    ),
  },
  {
    id: "courses",
    icon: <SiCoursera />,
    label: "Courses",
    content: (
      <div className="grid grid-cols-3 gap-4">
        {Array.from({ length: 6 }).map((_, index) => (
          <Card
            key={index}
            title={`Course ${index + 1}`}
            description="Learn cutting-edge technologies with this comprehensive course."
            image=""
            link="#"
          >
            <button className="mt-2 px-4 py-2 bg-amber-600 text-white rounded hover:bg-amber-700 cursor-pointer">
              Enroll Now
            </button>
          </Card>
        ))}
      </div>
    ),
  },
  {
    id: "contact",
    icon: <FaPhone />,
    label: "Contact",
    content: <Contact />,
  },
];

const Tabs = () => {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div
      className={`tabs-container p-6 rounded-lg w-9/10 ml-8 ${
        theme === "light" ? "bg-gray-200 text-gray-900" : "bg-gray-900 text-gray-300"
      }`}
    >
      <div className="tabs-header flex space-x-4 border-b-2">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`tab-item flex items-center space-x-2 px-4 py-2 cursor-pointer transition ${
              activeTab === tab.id
                ? "text-amber-500 border-b-2 border-amber-500"
                : theme === "light"
                ? "text-gray-600 hover:text-gray-800"
                : "text-gray-300 hover:text-gray-400"
            }`}
          >
            <div className="tab-icon text-xl">{tab.icon}</div>
            <span className="tab-label">{tab.label}</span>
          </div>
        ))}
      </div>

      <div className="tabs-content mt-6">{tabs.find((tab) => tab.id === activeTab)?.content}</div>
    </div>
  );
};

export default Tabs;