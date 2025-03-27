import { FaBookBookmark } from "react-icons/fa6";
import { Blog } from "../types";
import { FaEdit, FaTrash } from "react-icons/fa";

interface ArticleCardProps {
  article: Blog;
  onDelete: () => void;
  onEdit: () => void;
  onClick: () => void;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article, onDelete, onEdit, onClick }) => {
  const handleButtonClick = (e: React.MouseEvent, action: () => void) => {
    e.stopPropagation();
    action();
  };

  return (
    <div 
      className="bg-white rounded-lg shadow-md border border-gray-200 flex overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
      onClick={onClick}
    >
      <img
        src={article.image}
        alt={article.title}
        className="w-1/3 object-cover"
      />
      <div className="flex-1 p-4 flex flex-col justify-between">
        <div>
          <h3 className="font-semibold text-lg mb-2">{article.title}</h3>
          <p className="text-gray-600 text-sm line-clamp-2">{article.description}</p>
        </div>
        <div className="flex justify-between items-center text-sm text-gray-500 mt-2">
          <span>{article.time}</span>
          <div className="flex gap-3">
            <FaBookBookmark 
              className="hover:text-blue-600 cursor-pointer" 
              onClick={(e) => handleButtonClick(e, () => {})}
            />
            <FaEdit
              onClick={(e) => handleButtonClick(e, onEdit)}
              className="hover:text-green-600 cursor-pointer"
            />
            <FaTrash
              onClick={(e) => handleButtonClick(e, onDelete)}
              className="hover:text-red-600 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;