import { Trend } from '../types';

const trends: Trend[] = [
  { title: "The Future of AI", author: "John Doe" },
  { title: "Sustainability in Tech", author: "Jane Smith" },
  { title: "Blockchain Beyond Cryptocurrency", author: "Emily Davis" },
  { title: "Exploring Quantum Computing", author: "Robert Brown" }
];

const TrendsList = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-lg font-semibold mb-4">Today's Top Trends</h2>
      <div className="space-y-3">
        {trends.map((trend, index) => (
          <div key={index} className="p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
            <h3 className="font-medium">{trend.title}</h3>
            <p className="text-sm text-gray-500">By {trend.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendsList;