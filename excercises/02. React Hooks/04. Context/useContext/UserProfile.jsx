import { useContext } from "react";
import { UserContext } from "./UserContext";

const UserProfile = () => {

    const { user } = useContext(UserContext)

    return (
        <div className="w-72 h-40 bg-slate-200 rounded-md p-2 flex flex-col items-center">
            <h2 className="font-bold text-xl mt-2">User Profile</h2>
            <p className="mt-7 font-semibold text-slate-600">Name: {user.name}</p>
        </div>
    )
}

export default UserProfile