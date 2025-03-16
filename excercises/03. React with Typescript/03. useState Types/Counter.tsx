import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState<number>(0);

    const buttonClass: string = 'bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300'

    return (
        <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg max-w-sm mx-auto mt-10">
            <h2 className="text-4xl font-bold text-center mb-6">{count}</h2>
            <div className="flex justify-between gap-4">
                <button
                    onClick={() => setCount(count + 1)}
                    className={buttonClass}
                >
                    Increment
                </button>
                <button
                    onClick={() => setCount(count - 1)}
                    className={buttonClass}
                >
                    Decrement
                </button>
            </div>
        </div>
    );
};

export default Counter;