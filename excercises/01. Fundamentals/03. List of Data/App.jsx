import ProductList from "./Components/ProductList"
import UserList from "./Components/UserList"

function App() {

    return (
        <div className="min-h-screen flex justify-evenly items-center ">
            <UserList />
            <ProductList />
        </div>
    )
}

export default App
