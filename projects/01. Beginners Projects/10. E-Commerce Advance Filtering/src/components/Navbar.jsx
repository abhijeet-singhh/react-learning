import { useState } from 'react'
import { MoonIcon, SunIcon, ShoppingCartIcon, XMarkIcon, Bars3Icon } from '@heroicons/react/24/outline'

const navigationLinks = [
  { name: 'Home', href: '#' },
  { name: 'Shop', href: '#' },
  { name: 'New Arrivals', href: '#' },
  { name: 'Collections', href: '#' },
]

const Navbar = ({ query, handleInputChange }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [darkTheme, setDarkTheme] = useState(false)

  const toggleTheme = () => {
    setDarkTheme(!darkTheme)
  }

  return (
    <nav className='sticky top-0 z-50 w-full'>
      <div className='bg-slate-100 flex items-center justify-between px-4 sm:px-6 h-16 w-full shadow-sm'>
        {/* Logo Section */}
        <div className='flex-shrink-0 flex items-center font-bold text-xl md:text-2xl text-amber-800 cursor-pointer'>
          StepzZ
        </div>

        {/* Search Bar Section */}
        <div className='flex-1 mx-4 max-w-2xl'>
          <input
            type='text'
            value={query}
            onChange={handleInputChange}
            placeholder='Search here...'
            className='w-full max-w-xs sm:max-w-sm md:max-w-md border-2 border-zinc-400 rounded-lg px-3 py-1.5 text-sm outline-none focus:border-amber-800'
          />
        </div>

        {/* Right Section */}
        <div className='flex items-center justify-between gap-4 md:gap-8 lg:gap-20'>
          {/* Desktop Navigation Links */}
          <div className='md:flex items-center gap-5'>
            {navigationLinks.map(({ name, href }) => (
              <a
                key={name}
                href={href}
                className='font-semibold text-zinc-600 hover:text-amber-800 transition-colors'
              >
                {name}
              </a>
            ))}
          </div>

          {/* Icons Section */}
          <div className='flex items-center gap-4'>
            <button
              onClick={toggleTheme}
              className='hover:bg-stone-300 p-2 rounded-full cursor-pointer'
            >
              {darkTheme ? (
                <SunIcon className='h-6 w-6 text-gray-700' />
              ) : (
                <MoonIcon className='h-6 w-6 text-gray-700' />
              )}
            </button>

            <button className='relative p-1 cursor-pointer'>
              <ShoppingCartIcon className='h-6 w-6 text-gray-700' />
              <span className="absolute -top-1 -right-1 bg-amber-800 text-white text-xs px-1.5 rounded-full">
                0
              </span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className='md:hidden'
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6 text-gray-700" />
              ) : (
                <Bars3Icon className="h-6 w-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className='absolute top-14 left-0 w-full bg-slate-100 border-b-2 shadow-lg md:hidden'>
            <div className='px-4 py-4 space-y-4'>
              {navigationLinks.map(({ name, href }) => (
                <a
                  key={name}
                  href={href}
                  className='block text-lg font-medium text-zinc-600 hover:text-emerald-700 border-b-2'
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar