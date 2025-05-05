const Content = () => {
  return (
    <div className="bg-[#2b313a] text-white h-screen flex flex-col justify-center items-center p-10">
      <div className="text-center mb-8 -mt-90">
        <h2 className="text-3xl font-bold mb-4">Welcome to the Dashboard!</h2>
        <p className="text-lg text-gray-400">Here are your stats for today</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        <div className="bg-[#1f242d] p-6 rounded-lg shadow-md text-center">
          <h2 className="text-xl font-semibold mb-2">Total Users</h2>
          <span className="text-4xl font-bold text-green-400">7137</span>
        </div>

        <div className="bg-[#1f242d] p-6 rounded-lg shadow-md text-center">
          <h2 className="text-xl font-semibold mb-2">Revenue</h2>
          <span className="text-4xl font-bold text-blue-400">$7048</span>
        </div>
      </div>
    </div>
  );
};

export default Content;