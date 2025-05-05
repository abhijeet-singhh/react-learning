const Sidebar = () => {
    return (
      <div className="bg-[#31363F] text-white h-screen px-7 py-4 rounded">
        <ul className="space-y-2">
          <li className="hover:bg-[#3A3F4A] p-2 rounded cursor-pointer">Home</li>
          <li className="hover:bg-[#3A3F4A] p-2 rounded cursor-pointer">About</li>
          <li className="hover:bg-[#3A3F4A] p-2 rounded cursor-pointer">Contact</li>
          <li className="hover:bg-[#3A3F4A] p-2 rounded cursor-pointer">Portfolio</li>
          <li className="hover:bg-[#3A3F4A] p-2 rounded cursor-pointer">Settings</li>
        </ul>
      </div>
    );
  };
  
  export default Sidebar;