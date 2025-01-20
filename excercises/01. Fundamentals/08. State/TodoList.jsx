import { useState } from "react"
const TodoList = () => {

  const [todos, setTodos] = useState([])
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = e => {
    e.preventDefault()

    if (inputValue.trim()) {
      setTodos([...todos, inputValue])
      setInputValue('')
    }
  }
  const handleChange = e => {
    setInputValue(e.target.value)
  }
  return (
    <div className="w-96 h-64 bg-zinc-100 rounded-md p-2 text-slate-600 overflow-hidden">
      <h2 className="text-center font-extrabold text-2xl mt-2 mb-4">Todo List</h2>
      <form onSubmit={handleSubmit}>
        <input className="w-64 p-3 border-2 border-slate-300 rounded-md text-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-500" type="text" value={inputValue} onChange={handleChange} placeholder="Add a new Todo" />
        <button className="bg-slate-400 hover:bg-slate-500 px-2 py-2 m-3 text-white rounded-md transition-all active:scale-95" type="submit">Add Todo</button>
      </form>

      <ul className=" h-28 overflow-y-auto">
        {todos.map((todo, index) => (
          <li className="w-full px-2 py-1 bg-slate-300 font-semibold rounded-md mt-2" key={index}>{todo}</li>
        ))}
      </ul>

    </div>

  )
}

export default TodoList