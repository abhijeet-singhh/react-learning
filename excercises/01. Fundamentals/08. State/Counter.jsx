import { useState } from "react"

const Counter = () => {

  const [count, setCount] = useState(0)

  return (
    <div className="bg-zinc-100 text-slate-800 border-2 border-white w-72 h-56 rounded-md p-2">
      <h2 className="text-center font-extrabold text-2xl mt-2 mb-7">Counter</h2>
      <p className="text-center font-bold text-xl mb-6">You clicked {count} times.</p>
      <div className="flex justify-around items-center">
        <button className="bg-slate-400 px-2 py-1 m-4 text-white rounded-md active:scale-95" onClick={() => setCount(count + 1)}>Increment</button>
        <button className="bg-slate-400 px-2 py-1 m-4 text-white rounded-md active:scale-95" onClick={() => setCount(count - 1)}>Decrement</button>
      </div>
    </div>
  )
}

export default Counter