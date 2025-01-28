import FetchComponent from "./components/FetchComponent"
import FormComponent from "./components/FormComponent"
import ToggleComponent from "./Components/ToggleComponent"


const App = () => {
    return (
        <div className="min-h-screen bg-stone-700 flex justify-around items-center">
            <div className="flex flex-col items-center justify-evenly h-screen">
                <ToggleComponent />
                <FormComponent />
            </div>
            <FetchComponent />
        </div>
    )
}

export default App