
const Input = ({ handleChange, value, title, name }) => {

  const inputClasses = "mr-3 cursor-pointer accent-amber-700"

  return (
    <div>
      <label>
          <input onChange={handleChange} value={value} className={inputClasses} type="radio" name={name} />
          <span>{title}</span>
        </label>
    </div>
  )
}

export default Input