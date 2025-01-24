import { useContext, useState } from "react";
import { UserContext } from "./UserContext";

const UpdateUser = () => {

    const { updateUser } = useContext(UserContext)
    const [newName, setNewName] = useState('')

    const handleSubmit = e => {
        e.preventDefault()

        if (newName.trim) {
            updateUser(newName)
            setNewName('')
        }
    }

    return (
        <div className="w-72 h-40 bg-slate-200 rounded-md p-3">
            <h2 className="font-bold text-center mt-1 mb-2 text-xl">Update Username</h2>
            <form className="flex flex-col justify-center" onSubmit={handleSubmit}>
                <input className="rounded-md p-2 w-full mb-3 border-2 border-indigo-300 focus:border-indigo-500 outline-none" type="text" value={newName} onChange={e => setNewName(e.target.value)} placeholder="Enter new name..." />

                <button className="bg-indigo-500 px-2 py-1 text-white rounded hover:bg-indigo-600 active:scale-95" type="submit">Update</button>
            </form>
        </div>
    )
}

export default UpdateUser