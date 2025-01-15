import { useState } from "react";

const EventDemo = () => {
    const [buttonText, setButtonText] = useState('Click the button below.');
    const [copiedText, setCopiedText] = useState('Copy this text.');
    const [hovered, setHovered] = useState(false);

    const handleButtonClick = () => {
        setButtonText('You clicked the button.');
    };

    const handleCopyText = () => {
        setCopiedText('You copied the text.');
    };

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    return (
        <div className="flex flex-wrap justify-evenly items-center w-full gap-4 text-slate-300">

            {/* Button Section */}
            <div className="border-2 border-slate-500 p-3 rounded-md flex flex-col justify-center">
                <p className="text-center mb-2">{buttonText}</p>
                <button
                    onClick={handleButtonClick}
                    className="bg-emerald-700 px-4 py-2 rounded-md active:scale-95 m-auto"
                >
                    Click me
                </button>
            </div>

            {/* Copy Text Section */}
            <div className="border-2 border-slate-500 p-3 rounded-md">
                <p
                    onCopy={handleCopyText}
                    className="cursor-pointer select-all text-center"
                >
                    {copiedText}
                </p>
            </div>

            {/* Hover Effect Section */}
            <div className="border-2 border-slate-500 p-3 rounded-md">
                <p
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className={`transition-all duration-300 p-2 text-center cursor-pointer rounded-md ${hovered ? 'bg-yellow-300 text-slate-600' : 'bg-transparent'}`}
                >
                    Hover this text.
                </p>
            </div>
        </div>
    );
};

export default EventDemo;