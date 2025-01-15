import Footer from "./Components/Footer"
import Header from "./Components/Header"
import MainContent from "./Components/MainContent"

function App() {

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Header />
      <MainContent />
      <Footer />
    </div>
  )
}

export default App