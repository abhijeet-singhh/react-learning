import { useState } from "react"

const buttonClasses = 'text-center bg-gray-700 hover:bg-gray-600 rounded-lg p-4 text-lg cursor-pointer active:scale-95 transition-all duration-200'

const Calculator = () => {

    const [inputValue, setInputValue] = useState('')

    const clear = () => setInputValue('')

    const display = (value) => setInputValue(inputValue + value)

    const calculate = () => {
        setInputValue(eval(inputValue))
    }

    return (
        <div className="bg-gray-800 w-96 h-auto p-4 text-white rounded-md shadow-2xl">
            <input className="bg-gray-600 rounded py-2 px-4 w-full h-24 mb-4 text-xl font-semibold text-end" type="text" value={inputValue} />

            <div className="grid grid-cols-4 gap-3">
                <span className={`${buttonClasses} col-span-2`} onClick={() => clear()}>C</span>
                <span className={buttonClasses} onClick={() => display('/')}>/</span>
                <span className={buttonClasses} onClick={() => display('*')}>*</span>
                <span className={buttonClasses} onClick={() => display('7')}>7</span>
                <span className={buttonClasses} onClick={() => display('8')}>8</span>
                <span className={buttonClasses} onClick={() => display('9')}>9</span>
                <span className={buttonClasses} onClick={() => display('-')}>-</span>
                <span className={buttonClasses} onClick={() => display('4')}>4</span>
                <span className={buttonClasses} onClick={() => display('5')}>5</span>
                <span className={buttonClasses} onClick={() => display('6')}>6</span>
                <span className={`${buttonClasses} row-span-2 flex items-center justify-center`} onClick={() => display('+')}>+</span>
                <span className={buttonClasses} onClick={() => display('1')}>1</span>
                <span className={buttonClasses} onClick={() => display('2')}>2</span>
                <span className={buttonClasses} onClick={() => display('3')}>3</span>
                <span className={buttonClasses} onClick={() => display('0')}>0</span>
                <span className={buttonClasses} onClick={() => display('00')}>00</span>
                <span className={buttonClasses} onClick={() => display('.')}>.</span>
                <span className={buttonClasses} onClick={() => calculate()}>=</span>
            </div>
        </div>
    )
}

export default Calculator