import { useState } from "react";
import { useStore } from "../store/useStore";

interface RecipeProps {
    id: number;
    name: string;
    ingredients: string[];
    instructions: string;
}

const RecipeApp = () => {
    const { recipes, addRecipe, removeRecipe } = useStore();
    const [name, setName] = useState<string>('');
    const [ingredients, setIngredients] = useState<string>('');
    const [instructions, setInstructions] = useState<string>('');
    const [editingRecipe, setEditingRecipe] = useState<RecipeProps | null>(null);

    // Function to add a new recipe
    const handleAddRecipe = () => {
        if (name.trim() === '' || ingredients.trim() === '' || instructions.trim() === '') {
            alert("All fields are required!");
            return;
        }

        const newRecipe: RecipeProps = {
            id: Date.now(),
            name,
            ingredients: ingredients.split(',').map(ingredient => ingredient.trim()),
            instructions
        };

        addRecipe(newRecipe);
        setName('');
        setIngredients('');
        setInstructions('');
    };

    // Function to handle editing a recipe
    const handleEditRecipe = (recipe: RecipeProps) => {
        setEditingRecipe(recipe);
        setName(recipe.name);
        setIngredients(recipe.ingredients.join(', '));
        setInstructions(recipe.instructions);
    };

    // Function to update an existing recipe
    const handleUpdateRecipe = () => {
        if (!editingRecipe) return;

        const updatedRecipe: RecipeProps = {
            ...editingRecipe,
            name,
            ingredients: ingredients.split(',').map(ingredient => ingredient.trim()),
            instructions
        };

        removeRecipe(editingRecipe.id); // Remove the old recipe
        addRecipe(updatedRecipe); // Add the updated recipe
        setEditingRecipe(null);
        setName('');
        setIngredients('');
        setInstructions('');
    };

    // Function to cancel editing
    const handleCancelEdit = () => {
        setEditingRecipe(null);
        setName('');
        setIngredients('');
        setInstructions('');
    };

    const inputClass: string = "w-full p-2 mb-4 border border-zinc-600 rounded-md bg-zinc-900 text-gray-100 focus:outline-none focus:ring-2 focus:ring-neutral-700"
    const buttonClass: string = "px-4 py-2 text-white rounded-md cursor-pointer"

    return (
        <div className="h-screen flex flex-col md:flex-row">
            {/* Left Side: Form */}
            <div className="w-full md:w-1/3 p-6 bg-neutral-950 md:bg-zinc-900 shadow-lg">
                <h2 className="text-2xl font-bold text-center mb-6">Recipe Form</h2>

                {/* Input Form */}
                <div className="mb-6">
                    <input
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder="Recipe Name"
                        className={inputClass}
                    />
                    <input
                        type="text"
                        value={ingredients}
                        onChange={e => setIngredients(e.target.value)}
                        placeholder="Ingredients (comma-separated)"
                        className={inputClass}
                    />
                    <textarea
                        value={instructions}
                        onChange={e => setInstructions(e.target.value)}
                        placeholder="Instructions"
                        className={`h-34 resize-none ${inputClass}`}
                    />
                </div>

                {/* Action Buttons */}
                <div className="flex justify-center space-x-4">
                    {editingRecipe ? (
                        <>
                            <button
                                onClick={handleUpdateRecipe}
                                className={`${buttonClass} bg-sky-700 hover:bg-sky-800`}
                            >
                                Update Recipe
                            </button>
                            <button
                                onClick={handleCancelEdit}
                                className={`${buttonClass} bg-neutral-700 hover:bg-neutral-600`}
                            >
                                Cancel
                            </button>
                        </>
                    ) : (
                        <button
                            onClick={handleAddRecipe}
                            className={`${buttonClass} bg-lime-700 hover:bg-lime-800`}
                        >
                            Add Recipe
                        </button>
                    )}
                </div>
            </div>

            {/* Right Side: Recipe List */}
            <div className="w-full md:w-2/3 p-6 overflow-y-auto bg-neutral-950">
                <h2 className="text-2xl font-bold text-center mb-6">Recipe List</h2>

                <ul className="space-y-4">
                    {recipes.map(recipe => (
                        <li
                            key={recipe.id}
                            className="p-4 bg-zinc-900 border border-gray-700 rounded-md shadow-sm"
                        >
                            <h3 className="text-lg font-semibold text-gray-100">{recipe.name}</h3>
                            <p className="text-gray-400">
                                <span className="font-medium text-gray-200">Ingredients:</span> {recipe.ingredients.join(", ")}
                            </p>
                            <p className="text-gray-400">
                                <span className="font-medium text-gray-200">Instructions:</span> {recipe.instructions}
                            </p>

                            <div className="flex justify-end space-x-4 mt-4">
                                <button
                                    onClick={() => handleEditRecipe(recipe)}
                                    className="px-3 py-1 bg-amber-600 text-white rounded-md hover:bg-amber-700 cursor-pointer"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => removeRecipe(recipe.id)}
                                    className="px-3 py-1 bg-red-700 text-white rounded-md hover:bg-red-600 cursor-pointer"
                                >
                                    Delete
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default RecipeApp;

