const Recommended = ({ handleClick }) => {
  const buttonClasses = "px-3 py-1 border-2 border-gray-300 hover:bg-slate-200 active:rounded-full text-sm rounded-xl cursor-pointer"

  return (
    <>
      <div className="px-10 mt-2 mb-8 space-y-2 sticky top-8 z-10 rounded-lg bg-slate-100 py-2">
        <h2 className="font-semibold">Recommended</h2>
        <div className="flex items-center gap-3">
          <button 
            className={buttonClasses}
            value=""
            onClick={handleClick}
          >
            All
          </button>
          <button 
            className={buttonClasses}
            value="Nike"
            onClick={handleClick}
          >
            Nike
          </button>
          <button 
            className={buttonClasses}
            value="Adidas"
            onClick={handleClick}
          >
            Adidas
          </button>
          <button 
            className={buttonClasses}
            value="Puma"
            onClick={handleClick}
          >
            Puma
          </button>
          <button 
            className={buttonClasses}
            value="Vans"
            onClick={handleClick}
          >
            Vans
          </button>
        </div>
      </div>
    </>
  )
}

export default Recommended