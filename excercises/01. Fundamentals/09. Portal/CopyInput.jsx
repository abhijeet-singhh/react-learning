import { useState } from "react"
import PopupContent from "./PopupContent"

const CopyInput = () => {

    const [inputValue, setInputValue] = useState('')
    const [copied, setCopied] = useState(false)

    const handleCopy = () => {
        navigator.clipboard.writeText(inputValue).then(() => {
            setCopied(true)
            setTimeout(() => {
                setCopied(false)
            }, 2000);
        })
    }

    return (
        <div className="w-96">
            <input className="rounded-md w-4/5 p-2" type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} />
            <button className="bg-slate-400 font-semibold px-2 py-1 rounded ml-4 text-white active:scale-95 hover:bg-slate-500" onClick={handleCopy}>Copy</button>

            <PopupContent copied={copied} />
        </div>
    )
}

export default CopyInput