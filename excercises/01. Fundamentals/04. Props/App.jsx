import Person from "./Components/Person"
import Product from "./Components/Product"

function App() {

  return (
    <div className="min-h-screen flex justify-evenly items-center ">
      <Person name='Abhijeet' age='20' />
      <Product name='Laptop' price='1200' />
    </div>
  )
}

export default App
