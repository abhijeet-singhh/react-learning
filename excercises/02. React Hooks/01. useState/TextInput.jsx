import React, { useState } from 'react';

const TextInput = () => {

    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Form submitted with input: ${inputValue}`);
    };

    return (
        <div className='bg-lime-50 w-96 h-64 px-3 rounded-md text-slate-700 flex flex-col justify-around items-center'>
            <h2 className='font-bold text-2xl'>Text Input Form</h2>
            <form onSubmit={handleSubmit}>
                <label className='font-semibold'>
                    Your Name:
                    <input
                        className='w-full font-normal p-2 rounded outline-none border-2 border-lime-600 focus:border-lime-700'
                        type="text"
                        value={inputValue}
                        onChange={handleChange}
                        placeholder="Enter your name"
                    />
                </label>
                <button className='bg-lime-700 text-white px-2 py-1 rounded shadow-md w-full mt-2 hover:bg-lime-800 active:scale-95 transition-all duration-200' type="submit">Submit</button>
            </form>
            <p>Current input: {inputValue}</p>
        </div>
    );
};

export default TextInput;