import { useSelector, useDispatch } from "react-redux"
import { increment, decrement } from "../app/features/counter/counterSlice"
import { RootState } from "../app/store" // Correct import for RootState

const Counter = () => {
    // Read the data from the 'store'
    const count = useSelector((state: RootState) => state.counter.value)
    // Change the data by sending actions to the store
    const dispatch = useDispatch()

    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
    )
}

export default Counter








