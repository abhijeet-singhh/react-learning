import React from 'react';

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ children, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-black/30 z-50">
      <div className="relative bg-white rounded-lg shadow-xl p-6 mx-4 max-w-2xl w-full">
        <button 
          onClick={onClose}
          className="absolute top-1 right-3 text-2xl font-bold text-gray-600 hover:text-gray-800 cursor-pointer"
          aria-label="Close modal"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;