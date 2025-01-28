import useToggle from '../hooks/useToggle'

const ToggleComponent = () => {

  const [isToggled, toggle] = useToggle()

  return (
    <div className='bg-white rounded-md w-72 h-28 flex flex-col items-center justify-center gap-3'>
      <button className='bg-stone-500 px-2 py-1 rounded text-white hover:bg-stone-600' onClick={toggle}>{isToggled ? 'Hide' : 'Show'}Message</button>
      {isToggled && <p>This is a toggled message</p>}
    </div>
  )
}

export default ToggleComponent