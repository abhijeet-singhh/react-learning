import EventDemo from "./Components/EventDemo";

function App() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-800">
            <div className="max-w-4xl w-full bg-slate-700 rounded-xl p-6 shadow-lg">
                <h1 className="text-3xl font-bold text-center text-slate-200 mb-6">Interactive Events Demo</h1>
                <EventDemo />
            </div>
        </div>
    );
}

export default App;