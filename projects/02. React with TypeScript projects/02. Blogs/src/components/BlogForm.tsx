import { useEffect, useState } from "react";
import { useBlogs } from "../shared/BlogContext";
import { Blog } from "../types";

interface BlogFormProps {
  existingBlog?: Blog | null;
  onClose: () => void;
}

const BlogForm: React.FC<BlogFormProps> = ({ existingBlog, onClose }) => {
  const { addBlog, updateBlog } = useBlogs();
  const [title, setTitle] = useState(existingBlog?.title || "");
  const [description, setDescription] = useState(existingBlog?.description || "");
  const [image, setImage] = useState(existingBlog?.image || "");
  const [time, setTime] = useState(existingBlog?.time || "");
  const [errors, setErrors] = useState({
    title: "",
    description: "",
    image: "",
    time: "",
  });

  useEffect(() => {
    if (existingBlog) {
      setTitle(existingBlog.title);
      setDescription(existingBlog.description);
      setImage(existingBlog.image);
      setTime(existingBlog.time);
    }
  }, [existingBlog]);

  const validateFields = () => {
    const newErrors = {
      title: title.trim() ? "" : "Title is required.",
      description: description.trim() ? "" : "Description is required.",
      image: image.trim() ? "" : "Image URL is required.",
      time: time.trim() ? "" : "Date is required.",
    };
    setErrors(newErrors);

    // Return true if no errors
    return Object.values(newErrors).every((error) => error === "");
  };

  const handleSubmit = () => {
    if (!validateFields()) {
      return;
    }

    const blog: Blog = {
      id: existingBlog?.id || Date.now(),
      title: title.trim(),
      description: description.trim(),
      image: image.trim(),
      time: time.trim(),
      date: new Date().toISOString().split("T")[0],
    };

    if (existingBlog) {
      updateBlog(blog);
    } else {
      addBlog(blog);
    }
    onClose();
  };

  return (
    <div className="space-y-4 p-2">
      {image && (
        <img
          src={image}
          alt="Preview"
          className="w-full h-32 object-cover rounded-lg mb-2"
        />
      )}
      <div>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={`rounded w-full py-2 px-3 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black ${
            errors.title ? "border-red-500" : ""
          }`}
        />
        {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
      </div>
      <div>
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className={`rounded w-full py-2 px-3 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black h-32 resize-none ${
            errors.description ? "border-red-500" : ""
          }`}
        />
        {errors.description && (
          <p className="text-red-500 text-sm mt-1">{errors.description}</p>
        )}
      </div>
      <div>
        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className={`rounded w-full py-2 px-3 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black ${
            errors.image ? "border-red-500" : ""
          }`}
        />
        {errors.image && <p className="text-red-500 text-sm mt-1">{errors.image}</p>}
      </div>
      <div>
        <input
          type="date"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className={`rounded w-full py-2 px-3 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black ${
            errors.time ? "border-red-500" : ""
          }`}
        />
        {errors.time && <p className="text-red-500 text-sm mt-1">{errors.time}</p>}
      </div>
      <div className="flex justify-end gap-3 mt-4">
        <button
          onClick={handleSubmit}
          className="px-4 py-2 bg-black text-gray-100 rounded hover:bg-zinc-800 transition-colors cursor-pointer"
        >
          {existingBlog ? "Update" : "Create"}
        </button>
        <button
          onClick={onClose}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition-colors cursor-pointer"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default BlogForm;