import { useGetProductsByIDQuery } from "../app/service/mockData"

const SpecificProduct = () => {

    const { data, isError, isLoading } = useGetProductsByIDQuery(13)
    // console.log(data?.title)

    if (isError) {
        return <h2>Something went wrong! There is an error.</h2>
    }
    if (isLoading) {
        return <h2>Loading...</h2>
    }

  return (
    <div>
        <h2>{data?.title}</h2>
        <h2>{data?.price} USD</h2>
    </div>
  )
}

export default SpecificProduct