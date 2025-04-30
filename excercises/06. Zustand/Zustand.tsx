import useCounter from "../store/store"
import OtherComponent from "./OtherComponent"

const Zustand = () => {

    //? Accessing data from store

    // The first way is to provide an arrow fn
    // const count = useCounter(state => state.count)

    // Second way is to destructure the data
    // const {count, increment, decrement} = useCounter()

    // Third way to use store inside other components
    const { count } = useCounter()

    return (
        <div>
            <h1 className="text-center mb-8 text-xl font-semibold">Count: {count}</h1>
            <OtherComponent />
        </div>
    )
}

export default Zustand