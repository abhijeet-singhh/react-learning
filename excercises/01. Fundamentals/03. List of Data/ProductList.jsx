const ProductList = () => {

    const products = [
        { "id": 1, "name": "Laptop", "price": 999.99 },
        { "id": 2, "name": "Smartphone", "price": 799.49 },
        { "id": 3, "name": "Headphones", "price": 150.75 },
        { "id": 4, "name": "Smart Watch", "price": 199.99 },
        { "id": 5, "name": "Wireless Mouse", "price": 29.99 }
    ]


    return (
        <div>
            {products.map(({ id, name, price }) => {
                return (<div key={id}>
                    <h2>Name: {name}</h2>
                    <h2>Price: ${price}</h2>
                </div>)
            })}
        </div>
    )
}

export default ProductList