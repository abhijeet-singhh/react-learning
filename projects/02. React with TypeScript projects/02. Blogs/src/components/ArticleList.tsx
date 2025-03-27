import { memo } from 'react';
import { useBlogs } from '../shared/BlogContext';
import ArticleCard from './ArticleCard';
import { Blog } from '../types';

interface ArticleListProps {
  onEdit: (blog: Blog) => void;
  onOpen: (blog: Blog) => void;
}

const ArticleList = memo(({ onEdit, onOpen }: ArticleListProps) => {
  const { blogs, deleteBlog } = useBlogs();

  if (!blogs.length) {
    return (
      <div className="text-center text-gray-500 py-8">
        No blogs available. Start by creating one!
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {blogs.map((blog) => (
        <ArticleCard
          key={blog.id}
          article={blog}
          onDelete={() => deleteBlog(blog.id)}
          onEdit={() => onEdit(blog)}
          onClick={() => onOpen(blog)}
        />
      ))}
    </div>
  );
});

export default ArticleList;