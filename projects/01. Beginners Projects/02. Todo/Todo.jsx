import { useState } from "react"

const Todo = () => {
    const [todos, setTodos] = useState([])
    const [input, setInput] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!input.trim()) return
        setTodos(prev => [...prev, {
            text: input,
            id: Date.now()
        }])
        setInput('')
    }

    const handleRemove = (id) => {
        setTodos(prev => prev.filter(todo => todo.id !== id))
    }

    return (
        <div className="max-w-lg mx-auto px-4 py-2 bg-white rounded-lg">
            <h2 className="font-bold text-xl text-center mb-3">Todo App</h2>
            <form onSubmit={handleSubmit} className="mb-4">
                <input
                    type="text"
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    placeholder="Add task..."
                    className="p-2 mr-2 rounded-lg border-2 border-stone-400 outline-none focus:border-stone-600"
                />
                <button type="submit" className="bg-stone-600 hover:bg-stone-700 text-white px-3 py-2 rounded-full active:scale-95 transition-all duration-200">
                    Add Task
                </button>
            </form>

            <ul className="space-y-2">
                {todos.map(({ text, id }) => (
                    <li key={id} className="flex justify-between gap-5 items-center border px-2 py-1 rounded-full overflow-hidden overflow-x-auto">
                        <span>{text}</span>
                        <button
                            onClick={() => handleRemove(id)}
                            className="font-semibold bg-stone-600 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-stone-700"
                        >
                            <span>x</span>
                        </button>

                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Todo