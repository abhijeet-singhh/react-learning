import { createContext } from "react";
import ComponentA from "./Components/ComponentA";

export const Data = createContext()
export const Data1 = createContext()

function App() {

    const name = 'Abhijeet'
    const age = 20

    return (
        <div>
            <Data.Provider value={name}>
                <Data1.Provider value={age}>
                    <ComponentA name={name} />
                </Data1.Provider>
            </Data.Provider>
        </div>
    )
}

export default App;