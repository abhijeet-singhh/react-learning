import { useTheme } from "../context/ThemeContext";

const About = () => {
  const { theme } = useTheme();

  return (
    <section
      className={`p-6 rounded-lg shadow-md ${
        theme === "light" ? "bg-gray-100 text-gray-900" : "bg-gray-900 text-gray-300"
      }`}
    >
      <div>
        <h2 className="text-2xl font-bold mb-4">About Abhijeet</h2>
        <p className="mb-4">
          Hi, I'm Abhijeet, a passionate developer with a love for creating intuitive and dynamic web applications.
          With a strong foundation in modern web technologies, I strive to deliver high-quality solutions that make an impact.
        </p>
        <p className="mb-4">
          When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, and sharing knowledge with the developer community.
        </p>
        <p>
          Feel free to connect with me to discuss exciting projects, collaboration opportunities, or just to chat about tech!
        </p>
      </div>
    </section>
  );
};

export default About;