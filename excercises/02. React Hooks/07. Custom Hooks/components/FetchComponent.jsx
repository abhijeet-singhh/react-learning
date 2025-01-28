import useFetch from '../hooks/useFetch'

const FetchComponent = () => {

    const { responseData, isLoading, fetchError } = useFetch('https://jsonplaceholder.typicode.com/posts')

    if (isLoading) return <p className='text-white font-bold text-xl'>Loading...</p>;
    if (fetchError) return <p className='text-white font-bold text-xl'>Error: {error}</p>;

    return (
        <ul className='p-3 overflow-hidden overflow-y-auto bg-white rounded-md h-screen'>
            {responseData.map((post) => {
                return <li key={post.id}>{post.title}</li>
            })}
        </ul>
    )
}

export default FetchComponent