import Weather from "./Components/Weather"
import UserStatus from "./Components/UserStatus"
import Greeting from "./Components/Greeting"

function App() {

    return (
        <div className="min-h-screen flex justify-evenly items-center ">
            <div>
                <h2 className="font-bold">Weather Component</h2>
                <Weather temperature={10} />
                <Weather temperature={20} />
                <Weather temperature={30} />
            </div>

            <div>
                <h2 className="font-bold">UserStatus Component</h2>
                <UserStatus loggedIn={true} isAdmin={true} />
                <UserStatus loggedIn={true} isAdmin={false} />
                <UserStatus loggedIn={false} />
            </div>

            <div>
                <h2 className="font-bold">Greeting Component</h2>
                <Greeting timeOfDay="morning" />
                <Greeting timeOfDay="afternoon" />
                <Greeting />
            </div>
        </div>
    )
}

export default App