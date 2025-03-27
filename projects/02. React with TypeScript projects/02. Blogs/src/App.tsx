import { useState } from "react";
import { IoMdAddCircle } from "react-icons/io";
import Navigation from "./components/Navigation";
import PeopleToFollow from "./components/PeopleToFollow";
import TopicsList from "./components/TopicsList";
import TrendsList from "./components/TrendsList";
import Modal from "./components/Modal";
import BlogForm from "./components/BlogForm";
import ArticleList from "./components/ArticleList";
import ArticleModal from "./components/ArticleModal";
import { Blog } from "./types";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingBlog, setEditingBlog] = useState<Blog | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<Blog | null>(null);

  const openModalForNewBlog = () => {
    setEditingBlog(null);
    setIsModalOpen(true);
  };

  return (
    <div className="h-screen flex flex-col">
      <Navigation />
      
      <div className="flex-1 flex flex-col md:flex-row md:overflow-hidden">
        {/* Main Content Area */}
        <main className="flex-1 md:overflow-y-auto">
          <div className="max-w-2xl mx-auto p-4 md:p-6">
            <button 
              onClick={openModalForNewBlog}
              className="flex items-center gap-2 bg-black text-gray-100 px-4 py-2 rounded-lg mb-8 hover:bg-zinc-800 transition-colors w-auto mx-auto cursor-pointer"
            >
              <IoMdAddCircle className="text-xl" />
              Add New Blog
            </button>

            <ArticleList 
              onEdit={(blog) => {
                setEditingBlog(blog);
                setIsModalOpen(true);
              }}
              onOpen={setSelectedArticle}
            />

            {/* Edit/Create Blog Modal */}
            {isModalOpen && (
              <Modal onClose={() => setIsModalOpen(false)}>
                <BlogForm 
                  existingBlog={editingBlog}
                  onClose={() => setIsModalOpen(false)}
                />
              </Modal>
            )}

            {/* View Article Modal */}
            {selectedArticle && (
              <Modal onClose={() => setSelectedArticle(null)}>
                <ArticleModal 
                  article={selectedArticle}
                  onClose={() => setSelectedArticle(null)}
                />
              </Modal>
            )}
          </div>
        </main>

        {/* Right Sidebar */}
        <aside className="md:w-96 md:flex-shrink-0 md:sticky md:top-16 md:h-[calc(100vh-4rem)] md:overflow-y-auto bg-gray-50">
          <div className="p-4 md:p-6 space-y-6">
            <PeopleToFollow />
            <TrendsList />
            <TopicsList />
          </div>
        </aside>
      </div>
    </div>
  );
};

export default App;