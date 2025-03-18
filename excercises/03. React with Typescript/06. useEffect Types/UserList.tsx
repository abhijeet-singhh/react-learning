import { FC, useEffect, useState } from "react"

interface UserDataProp {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
}

const UserList: FC = () => {

    const [userData, setUserData] = useState<UserDataProp[]>([])
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await fetch('https://jsonplaceholder.typicode.com/users');
                if (!res.ok) {
                    throw new Error(`Error: ${res.status}`);
                }
                const data = await res.json()
                setUserData(data)
            } catch (err: unknown) {
                const errorMessage =
                  err instanceof Error ? err.message : "An unknown error occurred";
                setError(errorMessage);
              }  finally {
                setLoading(false);
            }
        }
        fetchUser();
    }, [])

    if (loading) {
        return <div className="text-white text-center mt-10">Loading...</div>;
    }
    if (error) {
        return <div className="text-red-500 text-center mt-10">Error: {error}</div>;
    }

    return (
        <div className="bg-gray-900 min-h-screen text-white p-5">
            <h1 className="text-2xl font-bold mb-5 text-center">User List</h1>
            <ul className="space-y-4">
                {userData.map(({ id, name, username }: UserDataProp) => (
                    <li 
                        key={id} 
                        className="bg-gray-800 p-4 rounded-lg shadow-md hover:bg-gray-700 transition"
                    >
                        <p className="text-lg font-semibold">Name: {name}</p>
                        <p className="text-sm text-gray-400">Username: {username}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default UserList