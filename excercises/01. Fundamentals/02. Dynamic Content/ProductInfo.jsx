const ProductInfo = () => {

  const product = {
    name: 'laptop',
    price: 1200,
    availability: 'In Stock'
  }

  return (
    <div>
      <h2>Name: {product.name}</h2>
      <h2>Price: ${product.price}</h2>
      <h2>Availability: ${product.availability}</h2>
    </div>
  )
}

export default ProductInfo