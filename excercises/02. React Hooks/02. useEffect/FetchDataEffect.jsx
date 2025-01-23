import { useEffect, useState } from "react"

const FetchDataEffect = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        async function getData() {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts')
            const data = await res.json()
            setData(data)
        }
        getData()
    }, [])

    return (
        <div className="w-4/5 h-96 overflow-hidden overflow-y-auto p-3 rounded-md bg-white ">
            <ul className="w-full list-none no-underline">
                {data.map((post) => (
                    <li className="bg-slate-200 rounded mb-1 text-slate-500 p-1" key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default FetchDataEffect