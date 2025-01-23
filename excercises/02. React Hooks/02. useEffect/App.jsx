import BasicEffect from "./Components/BasicEffect";
import CounterEffect from "./Components/CounterEffect";
import FetchDataEffect from "./Components/FetchDataEffect";

function App() {

  return (
    <div className="h-screen grid grid-flow-col bg-slate-600">
      <div className="col-span-1 place-content-center flex justify-center items-center">
        <BasicEffect />
      </div>
      <div className="col-span-1 flex justify-center items-center">
        <CounterEffect />
      </div>
      <div className="row-span-2 flex justify-center items-center">
        <FetchDataEffect />
      </div>
    </div>
  )
}

export default App;