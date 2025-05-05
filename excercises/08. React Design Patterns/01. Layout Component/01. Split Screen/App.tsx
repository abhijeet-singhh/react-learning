import Content from "./components/Content"
// import Footer from "./components/Footer"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import SplitScreen from "./components/SplitScreen"

const App = () => {
  return (
    <div className="overflow-hidden h-screen">
      <Header />
      <SplitScreen leftWeight={13} rightWeight={87}>
        <Sidebar />
        <Content />
      </SplitScreen>
      {/* <Footer /> */}
    </div>
  )
}

export default App