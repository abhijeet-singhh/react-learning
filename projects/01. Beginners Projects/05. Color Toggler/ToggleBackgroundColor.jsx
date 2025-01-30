
import { useState } from "react"

const ToggleBackgroundColor = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const theme = isDarkMode
    ? { backgroundColor: "bg-black", textColor: "text-white", borderColor: "border-white" }
    : { backgroundColor: "bg-white", textColor: "text-gray-800", borderColor: "border-gray-800" }

  const handleToggle = () => setIsDarkMode(!isDarkMode)

  return (
    <div className={`${theme.backgroundColor} ${theme.textColor} min-h-screen w-full flex justify-center items-center transition-all duration-500 ease-in-out`}>
      <button className={`border-2 ${theme.borderColor} font-semibold rounded px-4 py-2`} onClick={handleToggle}>
        Lights {isDarkMode ? "On" : "Off"}
      </button>
    </div>
  )
}

export default ToggleBackgroundColor