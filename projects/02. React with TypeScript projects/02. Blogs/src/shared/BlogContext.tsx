import { createContext, useContext, useState, useEffect, useCallback } from "react";
import { Blog } from "../types";

interface BlogContextType {
  blogs: Blog[];
  addBlog: (blog: Blog) => void;
  updateBlog: (blog: Blog) => void;
  deleteBlog: (id: number) => void;
}

const BlogContext = createContext<BlogContextType | undefined>(undefined);

export const BlogProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [isInitialized, setIsInitialized] = useState(false); // Track initialization

  // Load blogs from localStorage when the component mounts
  useEffect(() => {
    const storedBlogs = localStorage.getItem("blogs");
    if (storedBlogs) {
      try {
        const parsedBlogs = JSON.parse(storedBlogs);
        setBlogs(parsedBlogs);
      } catch (error) {
        console.error("Error parsing blogs from localStorage:", error);
      }
    }
    setIsInitialized(true); // Mark as initialized after loading
  }, []);

  // Save blogs to localStorage whenever they change, but only after initialization
  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem("blogs", JSON.stringify(blogs));
    }
  }, [blogs, isInitialized]);

  const addBlog = useCallback((blog: Blog) => {
    setBlogs((prev) => [...prev, { ...blog, id: Date.now() }]);
  }, []);

  const updateBlog = useCallback((updatedBlog: Blog) => {
    setBlogs((prev) => prev.map((blog) => (blog.id === updatedBlog.id ? updatedBlog : blog)));
  }, []);

  const deleteBlog = useCallback((id: number) => {
    setBlogs((prev) => prev.filter((blog) => blog.id !== id));
  }, []);

  return (
    <BlogContext.Provider value={{ blogs, addBlog, updateBlog, deleteBlog }}>
      {children}
    </BlogContext.Provider>
  );
};

export const useBlogs = () => {
  const context = useContext(BlogContext);
  if (!context) throw new Error("useBlogs must be used within a BlogProvider");
  return context;
};