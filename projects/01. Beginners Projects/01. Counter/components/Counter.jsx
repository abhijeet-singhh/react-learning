import { useReducer, useState } from "react"
import { counterReducer, initialState } from "../counterReducer"

const buttonClasses = "bg-rose-700 px-2 py-1 rounded hover:bg-rose-800 active:scale-95 transition-all duration-200";

const Counter = () => {

    const [state, dispatch] = useReducer(counterReducer, initialState)

    const [inputValue, setInputValue] = useState(0)

    const handleIncrement = () => dispatch({ type: 'increment' })
    const handleDecrement = () => dispatch({ type: 'decrement' })
    const handleReset = () => dispatch({ type: 'reset' })
    const handleIncrementByAmount = () => {
        dispatch({ type: 'incrementByAmount', payload: +inputValue })
        setInputValue(0)
    }
    const handleDecrementByAmount = () => {
        dispatch({ type: 'decrementByAmount', payload: +inputValue })
        setInputValue(0)
    }

    return (
        <div className="bg-white border-2 border-slate-400 p-4 rounded-md text-white">
            <h2 className="font-bold text-2xl text-center text-slate-600">Counter</h2>
            <h2 className="bg-stone-200 rounded-md py-1 text-center text-xl font-semibold text-slate-600 mb-5 mt-6">{state.count}</h2>
            <div className="flex justify-around items-center">
                <button className={`${buttonClasses} w-20`} onClick={handleIncrement}>+</button>
                <button className={`${buttonClasses} w-20`} onClick={handleDecrement}>-</button>
                <button className={`${buttonClasses} w-20`} onClick={handleReset}>Reset</button>
            </div>

            <div className="text-white">
                <input className="w-full mt-3 text-slate-600 p-2 outline-none border-2 border-rose-400 focus:border-rose-600 rounded-md" type="number" value={inputValue} onChange={e => setInputValue(e.target.value)} />
                <button className={`${buttonClasses} w-full mt-3`} onClick={handleIncrementByAmount}>Add</button>
                <button className={`${buttonClasses} w-full mt-1`} onClick={handleDecrementByAmount}>Subtract</button>
            </div>
        </div>
    )
}

export default Counter