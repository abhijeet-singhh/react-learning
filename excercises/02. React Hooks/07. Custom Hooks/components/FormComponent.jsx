import useInput from "../hooks/useInput";

const FormComponent = () => {
    const name = useInput("");
    const email = useInput("");

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Name: ${name.value}, Email: ${email.value}`);
        name.setValue('')
        email.setValue('')
    };

    return (
        <form onSubmit={handleSubmit} className='bg-white rounded-md w-72 h-52 flex flex-col items-center justify-center gap-3'>
            <div>
                <label>Name:
                    <input type="text" {...name} className="w-full border-2 border-stone-400 focus:border-stone-500 outline-none rounded p-1" />
                </label>
            </div>
            <div>
                <label>Email:
                    <input type="email" {...email} className="w-full border-2 border-stone-400 focus:border-stone-500 outline-none rounded p-1" />
                </label>
            </div>
            <button type="submit" className='bg-stone-500 px-2 py-1 rounded text-white hover:bg-stone-600'>Submit</button>
        </form>
    );
};

export default FormComponent;