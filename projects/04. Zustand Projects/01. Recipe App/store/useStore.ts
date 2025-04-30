import { create } from "zustand";

interface RecipeProps {
    id: number;
    name: string;
    ingredients: string[];
    instructions: string;
}

interface RecipeStoreProps {
    recipes: RecipeProps[];
    addRecipe: (recipie: RecipeProps) => void;
    removeRecipe: (id: number) => void;
}

export const useStore = create<RecipeStoreProps>((set) => ({
    recipes: [],
    addRecipe: (recipe) => set((state) => ({ recipes: [...state.recipes, recipe] })),
    removeRecipe: (id) => set((state) => ({recipes: state.recipes.filter((recipe) => recipe.id !== id)}))
}))