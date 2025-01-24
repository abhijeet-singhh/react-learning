import UpdateUser from "./Components/UpdateUser";
import { UserProvider } from "./Components/UserContext";
import UserProfile from "./Components/UserProfile";

function App() {

    return (
        <div className="min-h-screen flex gap-8 justify-center items-center bg-slate-600">
            <UserProvider>
                <UserProfile />
                <UpdateUser />
            </UserProvider>
        </div>
    );
}

export default App;