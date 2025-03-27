import { FaUser } from 'react-icons/fa';
import { Person } from '../types';

const UserCard: React.FC<{ person: Person }> = ({ person }) => {

  return (
    <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg">
      <div className="flex items-center gap-3">
        <FaUser className="text-gray-600" />
        <span className="font-medium">{person.name}</span>
      </div>
      <button className={`px-3 py-1 rounded-md text-sm cursor-pointer ${
        person.following 
          ? 'bg-gray-200 text-gray-700 hover:bg-gray-300' 
          : 'bg-black text-white'
      }`}>
        {person.following ? 'Following' : 'Follow'}
      </button>
    </div>
  );
};

export default UserCard;