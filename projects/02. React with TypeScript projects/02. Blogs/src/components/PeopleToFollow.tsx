import UserCard from './UserCard';
import { Person } from '../types';

const peopleToFollow: Person[] = [
  { name: "Alice Johnson", following: true },
  { name: "Bob Smith", following: false },
  { name: "Charlie Brown", following: true },
  { name: "Diana Williams", following: false },
  { name: "Eve Davis", following: true },
];

const PeopleToFollow = () => {

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-lg font-semibold mb-4">People to Follow</h2>
      <div className="space-y-3">
        {peopleToFollow.map((person, index) => (
          <UserCard key={index} person={person} />
        ))}
      </div>
    </div>
  );
};

export default PeopleToFollow;