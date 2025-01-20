import { useEffect, useState } from "react"

const PracticeExample = () => {

    const [name, setName] = useState(() => {
        const savedName = localStorage.getItem('name')
        return savedName ? JSON.parse(savedName) : ''
    })

    useEffect(() => {
        localStorage.setItem('name', JSON.stringify(name))
    }, [name])

    const handleChange = e => {
        setName(e.target.value)
    }
    const handleClear = () => setName('')

    return (
        <div>
            <div className="bg-white text-slate-600 p-6 rounded-lg shadow-md w-full max-w-md">
                <h2 className="font-bold texl-xl">Your Name: {name}</h2>
                <input className="w-full p-3 border-2 border-gray-300 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-slate-500 mb-4 mt-4" type="text" value={name} onChange={handleChange} placeholder="Enter your name" />
                <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 active:scale-95" onClick={handleClear}>Clear Name</button>
            </div>
        </div>
    )
}

export default PracticeExample