import { useEffect, useState } from "react"

const CounterEffect = () => {

  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `Increment ${count}`
  }, [count])

  return (
    <div className="">
      <h2 className="text-white font-bold text-center text-2xl mb-2">{count}</h2>
      <button className="bg-lime-600 hover:bg-lime-700 px-2 py-1 rounded text-white" onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default CounterEffect