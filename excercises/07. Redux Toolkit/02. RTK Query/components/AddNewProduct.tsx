import { useAddNewProductMutation } from "../app/service/mockData"

const AddNewProduct = () => {

  const [AddNewProduct, { data, isError, isLoading }] = useAddNewProductMutation()

  if (isError) {
    return <h2>Something went wrong! There is an error.</h2>
  }
  if (isLoading) {
    return <h2>Loading...</h2>
  }

  const handleAddProduct = async () => {
    try{
      const newProductData = {
        title: 'Amazing T-shirt',
        description: 'This is one of the best and amazing t-shirt in the market',
        price: 129.99,
      }
      await AddNewProduct(newProductData)
    } catch (error) {
      console.error('Error addig new product: ', error)
    }
  }

  return (
    <div>
       <h2>{data?.id}</h2>
       <h2>{data?.title}</h2>
       <h2>{data?.price}</h2>
       <h2>{data?.description}</h2>
      <button onClick={handleAddProduct} disabled={isLoading}>Add New Product</button>
    </div>
  )
}

export default AddNewProduct