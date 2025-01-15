import Greeting from "./Components/Greeting"
import ProductInfo from "./Components/ProductInfo"

function App() {

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <Greeting />
      <ProductInfo />
    </div>
  )
}

export default App