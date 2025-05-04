import { useGetAllProductsQuery } from "../app/service/mockData"

const AllProducts = () => {

    const { data, isError, isLoading } = useGetAllProductsQuery()

    if (isError) {
        return <h2>Something went wrong! There is an error.</h2>
    }
    if (isLoading) {
        return <h2>Loading...</h2>
    }

    return (
        <div>
            {data?.products.map(({ id, title, price, description }) => (
                <div key={id}>
                    <h2>{title} - {price} USD</h2>
                    <p>{description}</p>
                </div>
            ))}
        </div>
    )
}

export default AllProducts