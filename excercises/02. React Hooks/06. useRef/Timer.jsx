import { useRef, useState, useEffect } from "react"

const Timer = () => {

    const [count, setCount] = useState(0)

    const intervalRef = useRef(null)

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setCount(prevCount => prevCount + 1)
        }, 2000)

        return () => {
            clearInterval(intervalRef.current)
        }

    }, [])

    return (
        <div className="w-72 h-52 p-2 bg-slate-100 flex flex-col justify-center items-center rounded-md">
            <h2 className="font-bold text-xl -mt-10 mb-8 text-slate-600">useRef example 2</h2>
            <h2 className="bg-slate-300 p-2 rounded-md w-full text-center border-2 border-slate-400">Timer: {count} seconds</h2>
            <button className="bg-amber-600 px-2 py-1 rounded text-white mt-3 active:scale-95 transition-all duration-200" onClick={() => clearInterval(intervalRef.current)}>Stop Timer</button>
        </div>
    )
}

export default Timer