import FocusInput from "./Components/FocusInput";
import Timer from "./Components/Timer";

function App() {

    return (
        <div className="min-h-screen flex justify-center items-center gap-8 bg-slate-600">
            <FocusInput />
            <Timer />
        </div>
    );
}

export default App;