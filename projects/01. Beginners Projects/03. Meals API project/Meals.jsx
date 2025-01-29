import axios from "axios"
import { useState, useEffect } from "react"

const Meals = () => {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchMeals = async () => {
            try {
                const response = await axios.get(
                    "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
                )
                setItems(response.data.meals);
            } catch (err) {
                setError("Failed to fetch meals");
            } finally {
                setLoading(false);
            }
        }

        fetchMeals()
    }, [])

    if (loading) {
        return <div className="text-center text-xl font-semibold">Loading...</div>
    }

    if (error) {
        return <div className="text-center text-xl text-red-500 font-semibold">{error}</div>
    }

    return (
        <div className="bg-white text-black w-full h-full flex gap-8 justify-around flex-wrap py-8 px-20">
            {items.map(({ strMeal, strMealThumb, idMeal }) => (
                <div key={idMeal} className="bg-stone-600 p-4 rounded-md w-96 shadow-xl">
                    <img
                        className="w-full h-72 m-auto rounded-md object-cover"
                        src={strMealThumb}
                        alt={strMeal}
                    />
                    <div className="flex justify-between items-center mt-2">
                        <p className="text-white">{strMeal}</p>
                        <p className="text-white">{idMeal}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Meals