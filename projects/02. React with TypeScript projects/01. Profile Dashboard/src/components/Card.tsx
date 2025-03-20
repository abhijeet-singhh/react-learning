import { useTheme } from "../context/ThemeContext";

interface CardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, description, image, link, children }) => {
  const { theme } = useTheme();

  return (
    <div
      className={`flex flex-col rounded-lg shadow-md overflow-hidden transition h-56 ${
        theme === "light" ? "bg-zinc-100 text-gray-900" : "bg-gray-800 text-gray-300"
      }`}
    >
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover"
        />
      )}
      <div className="p-4 flex flex-col justify-between">
        <div>
          <h2 className="text-lg font-bold">{title}</h2>
          <p className="text-sm mt-2 line-clamp-2">{description}</p>
        </div>
        <a
          href={link}
          className="text-amber-600 hover:underline mt-4 text-sm"
          target="_blank"
          rel="noopener noreferrer"
        >
          Watch Now
        </a>
        {children && <div className="mt-4">{children}</div>}
      </div>
    </div>
  );
};

export default Card;