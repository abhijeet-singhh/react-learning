
const Product = ({name, price}) => {
    return (
      <div>
          <h1 className="font-bold">Product</h1>
          <h2>Name: {name}</h2>
          <p>Price: ${price}</p>
      </div>
    )
  }
  
  export default Product