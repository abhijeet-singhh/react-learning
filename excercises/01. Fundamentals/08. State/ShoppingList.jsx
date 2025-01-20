import { useState } from "react"

const ShoppingList = () => {

  const [items, setItems] = useState([])
  const [name, setName] = useState('')
  const [quantity, setQuantity] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    if (!name || !quantity) return
    const newItem = {
      name,
      quantity: parseInt(quantity)
    }

    setItems((prevItems) => [...prevItems, newItem])
    setName('')
    setQuantity('')
  }

  return (
    <div className="w-96 h-72 bg-zinc-100 rounded-md p-2 text-slate-600 overflow-hidden">
      <h2 className="text-center font-extrabold text-2xl mt-2 mb-2">Shopping List</h2>
      <form onSubmit={handleSubmit}>
        <input className="w-full p-1 border-2 border-gray-300 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-slate-500 mb-1 mt-4" type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Item name" />
        <input className="w-full p-1 border-2 border-gray-300 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-slate-500 mb-2 mt-2" type="number" value={quantity} onChange={e => setQuantity(e.target.value)} placeholder="Quantity" />
        <button className="bg-emerald-500 text-white px-4 py-2 rounded-md hover:bg-emerald-600 active:scale-95" type="submit" onClick={handleSubmit}>Add Item</button>
      </form>

      <ul className=" h-28 overflow-y-auto">
        {items.map((item, index) => {
          return <li className="w-full px-2 py-1 bg-slate-300 font-semibold rounded-md mt-2" key={index}>{item.name} — Quantity: {item.quantity}</li>
        })}
      </ul>
    </div>
  )
}

export default ShoppingList