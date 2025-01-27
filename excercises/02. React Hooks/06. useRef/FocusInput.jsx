import { useRef } from "react"

const FocusInput = () => {

    const inputRef = useRef(null)

    const focusInput = () => {
        if (inputRef.current) {
            inputRef.current.focus()
        }
    }

    return (
        <div className="w-72 h-52 p-2 bg-slate-100 flex flex-col justify-center items-center rounded-md">
            <h2 className="font-bold text-xl -mt-10 mb-8 text-slate-600">useRef example 1</h2>
            <input className="p-2 w-full border-2 outline-none border-amber-300 focus:border-amber-600 rounded" type="text" ref={inputRef} placeholder="Click the button to focus.." />
            <button className="bg-amber-600 px-2 py-1 rounded text-white mt-3 active:scale-95 transition-all duration-200" onClick={focusInput}>Focus Input</button>
        </div>
    )
}

export default FocusInput