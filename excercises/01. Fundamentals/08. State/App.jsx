import Counter from "./Components/Counter";
import Profile from "./Components/Profile";
import ShoppingList from "./Components/ShoppingList";
import TodoList from "./Components/TodoList";

function App() {
  return (
    <div className="min-h-screen grid grid-cols-2 gap-4 place-items-center bg-slate-800 text-white">
      <Counter />
      <TodoList />
      <ShoppingList />
      <Profile />
    </div>
  );
}

export default App;