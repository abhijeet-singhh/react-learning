import { createPortal } from "react-dom"

const PopupContent = ({ copied }) => {
    return createPortal(
        <section>
            {copied && (
                <div className="bg-zinc-100 rounded-md px-5 py-3 transition-all transition-1s" style={{ position: 'absolute', bottom: '3rem', right: '3rem' }}>Copied to clipboard</div>
            )}
        </section>,
        document.querySelector('#popup-content')
    )
}

export default PopupContent