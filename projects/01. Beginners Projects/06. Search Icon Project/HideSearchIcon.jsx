import { useState, useEffect, useRef } from 'react'
import { FiSearch } from 'react-icons/fi'

const HideSearchIcon = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsSearchVisible(false);
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  return (
    <div ref={containerRef} className="flex items-center">
      {isSearchVisible && (
        <input
          type="text"
          placeholder="Search..."
          autoFocus
          className="mr-2 px-2 py-1 border-2 outline-none border-sky-600 rounded-md transition-all duration-300"
        />
      )}
      <FiSearch
        className="text-2xl cursor-pointer text-white hover:text-sky-300 hover:scale-105"
        onClick={() => setIsSearchVisible(!isSearchVisible)}
      />
    </div>
  )
}

export default HideSearchIcon