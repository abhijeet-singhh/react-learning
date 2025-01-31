import { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

const Accordion = ({ items }) => {
  const [activeId, setActiveId] = useState(null);

  const toggleItem = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className="w-full max-w-3xl mx-auto space-y-4">
      {items.map(({id, title, content}) => (
        <div 
          key={id}
          className="border border-slate-700 rounded-lg overflow-hidden transition-all duration-300"
        >
          <button
            onClick={() => toggleItem(id)}
            className="w-full flex justify-between items-center px-6 py-4 bg-zinc-900 hover:bg-zinc-950 transition-colors"
          >
            <span className="text-lg font-semibold text-left">{title}</span>
            <FiChevronDown 
              className={`text-xl transform transition-transform duration-300 ${
                activeId === id ? 'rotate-180' : ''
              }`}
            />
          </button>
          <div
            id={`content-${id}`}
            className={`transition-all duration-300 ease-in-out ${
              activeId === id ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="px-6 py-4 bg-zinc-900 border-t border-zinc-600">
              <p className="text-gray-300 leading-relaxed">{content}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;