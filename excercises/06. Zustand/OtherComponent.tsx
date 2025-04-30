import useCounter from "../store/store"

const OtherComponent = () => {

    const {increment, decrement} = useCounter()

  return (
    <div>
        <button onClick={increment} className="bg-zinc-900 px-4 py-2 rounded mr-2 cursor-pointer">Increment</button>
        <button onClick={decrement} className="bg-zinc-900 px-4 py-2 rounded cursor-pointer">Decrement</button>
    </div>
  )
}

export default OtherComponent