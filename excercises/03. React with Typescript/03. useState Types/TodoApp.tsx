import { useState } from "react";

interface Todo {
    id: number;
    task: string;
    completed: boolean;
}

const TodoApp = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [task, setTask] = useState<string>("");

    const addTodo = (task: string) => {
        const newTodo: Todo = {
            id: Date.now(), // Use timestamp for a unique id
            task,
            completed: false,
        };
        setTodos((prevTodos) => [...prevTodos, newTodo]);
        setTask(""); // Clear the input field after adding a todo
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTask(e.target.value);
    };

    const deleteTodo = (id: number) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    };

    return (
        <div className="w-full min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold mb-4 text-center">Todo List</h2>
                <div className="flex items-center gap-2 mb-4">
                    <input
                        type="text"
                        placeholder="Enter Task"
                        value={task}
                        onChange={handleInputChange}
                        className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                    />
                    <button
                        onClick={() => addTodo(task)}
                        disabled={!task.trim()}
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Add
                    </button>
                </div>
                <ul className="space-y-2">
                    {todos.map(({ id, task, completed }) => (
                        <li
                            key={id}
                            className="flex items-center justify-between bg-gray-100 dark:bg-gray-700 p-3 rounded-lg shadow-sm"
                        >
                            <span className={`flex-1 ${completed ? "line-through text-gray-500" : ""}`}>
                                {task}
                            </span>
                            <button
                                onClick={() => deleteTodo(id)}
                                className="text-red-500 hover:text-red-600"
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
                {todos.length === 0 && (
                    <p className="text-center text-gray-500 dark:text-gray-400 mt-4">
                        No tasks yet. Add a task to get started!
                    </p>
                )}
            </div>
        </div>
    );
};

export default TodoApp;