import { useState } from "react"

const Profile = () => {

  const [profile, setProfile] = useState({
    name: '',
    age: ''
  })
  const handleChange = e => {
    const { name, value } = e.target
    setProfile(prevProfile => (
      { ...prevProfile, [name]: value }
    ))
  }

  return (
    <div className="w-96 h-72 bg-zinc-100 rounded-md p-2 text-slate-600 overflow-hidden">
      <h2 className="text-center font-extrabold text-2xl mt-2 mb-1">User Profile</h2>
      <div>
        <label className="font-bold">Name:
          <input className="w-full font-normal p-1 border-2 border-gray-300 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-slate-500 mb-1" type="text" name="name" value={profile.name} onChange={handleChange} />
        </label>
        <label className="font-bold">Age:
          <input className="w-full font-normal p-1 border-2 border-gray-300 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-slate-500 mb-1" type="text" name="age" value={profile.age} onChange={handleChange} />
        </label>

        <div className="bg-slate-300 font-semibold p-2 rounded-md mt-2">
          <h3 className="text-center font-bold mb-3">Profile Information</h3>
          <div className="flex justify-around items-center">
            <p>Name: {profile.name}</p>
            <p>Age: {profile.age}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile