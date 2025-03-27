const topics = [
    'AI Revolution', 'Blockchain Tech', 'VR in Gaming', 
    'Cloud Evolution', 'Tech in Space', 'Quantum Computing'
  ];
  
  const TopicsList = () => {
    return (
      <div className="bg-white rounded-lg shadow-md p-4">
        <h2 className="text-lg font-semibold mb-4">Topics For You</h2>
        <div className="flex flex-wrap gap-2">
          {topics.map((topic, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-gray-100 rounded-full text-sm hover:bg-gray-200 cursor-pointer"
            >
              {topic}
            </span>
          ))}
        </div>
      </div>
    );
  };
  
  export default TopicsList;