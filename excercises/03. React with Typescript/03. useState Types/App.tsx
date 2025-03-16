import Counter from "./components/Counter";
import TodoApp from "./components/TodoApp";
import UserProfile from "./components/UserProfile";

function App() {

  return (
    <div className="min-h-screen flex flex-col justify-center items-center gap-8 bg-slate-600 text-white">
      <Counter />
      <UserProfile />
      <TodoApp />
    </div>
  );
}

export default App;

