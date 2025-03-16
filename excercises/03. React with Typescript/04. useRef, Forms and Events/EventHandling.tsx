import React from "react";

const EventHandling = () => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Button clicked", e.currentTarget);
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    console.log("Mouse entered!", e.currentTarget);
  };

  return (
    <div
      className="bg-gray-900 text-white p-6 rounded-lg text-center m-24"
      onMouseEnter={handleMouseEnter}
    >
      <h2 className="text-2xl font-semibold mb-4">Event Handling</h2>
      <button
        className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded transition-colors duration-200"
        onClick={handleClick}
      >
        Click
      </button>
    </div>
  );
};

export default EventHandling;