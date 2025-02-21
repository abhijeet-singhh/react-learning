import { useState } from "react"
import Card from "./components/Card"
import Navbar from "./components/Navbar"
import Products from "./components/Products"
import Recommended from "./components/Recommended"
import Sidebar from "./components/Sidebar/Sidebar"
import products from "./db/Data"

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [query, setQuery] = useState('')

  // Input Filter Handler
  const handleInputChange = e => {
    setQuery(e.target.value)
  }

  // Radio Filter Handler
  const handleChange = e => {
    setSelectedCategory(e.target.value)
  }

  // Button Filter Handler
  const handleClick = e => {
    setSelectedCategory(e.target.value)
  }

  // Main Filter Function
  const filteredData = (products, query, selected) => {
    let filteredProducts = products

    // Filtering Input Items
    if (query) {
      filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(query.toLowerCase())
      )
    }

    // Applying Selected Filter
    if (selected) {
      filteredProducts = filteredProducts.filter(product => {
        // Handle price ranges
        if (["50", "100", "150", "200"].includes(selected)) {
          const price = parseFloat(product.newPrice.replace('$', ''))
          switch(selected) {
            case "50": return price <= 50
            case "100": return price > 50 && price <= 100
            case "150": return price > 100 && price <= 150
            case "200": return price > 150
            default: return true
          }
        }
        
        // Handle other filters
        return (
          product.category === selected ||
          product.color === selected ||
          product.company === selected ||
          product.title === selected
        )
      })
    }

    return filteredProducts.map(product => (
      <Card
        key={product.id}
        img={product.img}
        title={product.title}
        star={product.star}
        reviews={product.reviews}
        prevPrice={product.prevPrice}
        newPrice={product.newPrice}
      />
    ))
  }

  const result = filteredData(products, query, selectedCategory)

  return (
    <div className="min-h-screen bg-slate-100">
      <Navbar query={query} handleInputChange={handleInputChange} />

      <div className="flex mx-4 relative">
        <div className="fixed top-10 left-0 h-full z-10">
          <Sidebar handleChange={handleChange} />
        </div>

        <div className="ml-72 relative">
          <Recommended handleClick={handleClick} />
          <div className="flex flex-wrap gap-8 mx-10 mb-8 justify-start">
            <Products result={result} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App