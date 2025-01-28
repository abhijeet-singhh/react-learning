import { useId } from 'react'

const UniqueID = () => {
    const baseId = useId()

    const items = ["Apple", "Banana", "Orange"]

    return (
        <div className="w-72 bg-stone-800 p-6 rounded-md shadow-lg">
            <h2 className="text-stone-100 text-center mb-4 text-lg font-semibold">
                Grocery List
            </h2>

            <div className="space-y-2">
                {items.map((item, index) => (
                    <div key={`${baseId}-${index}`} className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            id={`${baseId}-${index}`}
                            className="w-4 h-4 accent-stone-600"
                        />
                        <label
                            htmlFor={`${baseId}-${index}`}
                            className="text-stone-100"
                        >
                            {item}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default UniqueID