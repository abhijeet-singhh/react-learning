import { Blog } from "../types";
import Modal from "./Modal";

interface ArticleModalProps {
    article: Blog;
    onClose: () => void;
}

const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose }) => {
    return (
        <Modal onClose={onClose}>
            <div className="max-w-2xl w-full p-6 h-96 overflow-y-auto">
                <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <div className="flex justify-between items-center gap-4 mb-4 text-gray-600">
                    <h2 className="text-2xl font-bold">{article.title}</h2>
                    <span className="mt-1">{article.time}</span>
                </div>
                <p>{article.description}</p>
            </div>
        </Modal>
    );
};

export default ArticleModal;