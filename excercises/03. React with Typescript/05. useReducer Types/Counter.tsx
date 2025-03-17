import { useReducer } from "react"
import { counterReducer, CounterState } from "../counterReducer"

const initialState: CounterState = { count: 0 };

const Counter = () => {

    const [state, dispatch] = useReducer(counterReducer, initialState)

    const increment = () => {
        dispatch({ type: 'INCREMENT' })
    }
    const decrement = () => {
        dispatch({ type: 'DECREMENT' })
    }
    const buttonClass: string = 'bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded transition duration-300'

    return (
        <div className="bg-gray-800 text-white p-6 rounded-lg shadow-md max-w-sm mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Count: {state.count}</h2>
            <div className="flex space-x-4">
                <button
                    onClick={increment}
                    className={buttonClass}
                >
                    Increment
                </button>
                <button
                    onClick={decrement}
                    className={buttonClass}
                >
                    Decrement
                </button>
            </div>
        </div>
    )
}

export default Counter