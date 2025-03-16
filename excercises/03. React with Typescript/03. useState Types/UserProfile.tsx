import { useState } from "react";

interface UserInfo {
    name: string;
    age: number | string;
    email: string;
}

const UserProfile = () => {
    const inputClass: string =
        "bg-gray-700 text-white border-2 border-gray-600 rounded-md p-2 w-full focus:border-blue-500 focus:outline-none transition duration-300";

    const [profile, setProfile] = useState<UserInfo>({
        name: "",
        age: "",
        email: "",
    });

    const updateProfile = (field: keyof UserInfo, value: string) => {
        setProfile((prevProfile) => ({
            ...prevProfile,
            [field]: field === "age" ? (value ? +value : "") : value,
        }));
    };

    const { name, age, email } = profile;

    return (
        <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg max-w-md mx-auto mt-10">
            <h1 className="text-2xl font-bold mb-6 text-center">User Profile</h1>
            <div className="space-y-4">
                <input
                    type="text"
                    value={name}
                    placeholder="Name"
                    onChange={(e) => updateProfile("name", e.target.value)}
                    className={inputClass}
                />
                <input
                    type="number"
                    value={age || ""}
                    placeholder="Age"
                    onChange={(e) => updateProfile("age", e.target.value)}
                    className={inputClass}
                />
                <input
                    type="text"
                    value={email}
                    placeholder="Email"
                    onChange={(e) => updateProfile("email", e.target.value)}
                    className={inputClass}
                />
            </div>
            <div className="mt-6 space-y-2">
                <h2 className="text-lg">
                    <span className="font-semibold">Name:</span> {name}
                </h2>
                <h2 className="text-lg">
                    <span className="font-semibold">Age:</span> {age}
                </h2>
                <h2 className="text-lg">
                    <span className="font-semibold">Email:</span> {email}
                </h2>
            </div>
        </div>
    );
};

export default UserProfile;