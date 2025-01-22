import { useState } from "react"

const Switcher = () => {

    const [sw, setSw] = useState(false)

    return (
        <div className="w-72 h-40 bg-slate-200 rounded-md p-3">
            {sw ? (
                <span>Dark</span>
            ) : (
                <span>Light</span>
            )}

            <br />

            <input className="rounded-md p-2 w-full mb-3 mt-2 border-2 border-indigo-300 focus:border-indigo-500 outline-none" type="text" key={sw ? 'dark' : 'light'} />
            <button className="bg-indigo-500 px-2 py-1 text-white rounded hover:bg-indigo-600 active:scale-95" onClick={() => setSw((s) => !s)}>Switch</button>
        </div>
    )
}

export default Switcher