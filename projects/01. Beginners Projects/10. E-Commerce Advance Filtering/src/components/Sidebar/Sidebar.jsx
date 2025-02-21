import Categories from "./Categories"
import Prices from "./Prices"
import Colors from "./Colors"

const Sidebar = ({ handleChange }) => {
  return (
    <>
        <div className="flex flex-col border-r-2 border-slate-300 rounded-xl w-72 h-full mt-12 pl-16 sticky top-0 z-0">
            <Categories handleChange={handleChange} />
            <Prices handleChange={handleChange} />
            <Colors handleChange={handleChange} />
        </div>
    </>
  )
}

export default Sidebar