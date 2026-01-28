// import { Typography, Card } from "@material-tailwind/react";
import RecipeNavbar from "./components/RecipeNavbar";
import Footer from "./components/Footer";
import RecipeCard from "./components/RecipeCard";
import AddRecipeForm from "./components/AddRecipeForm";
import { useState } from "react";
import card from "@material-tailwind/react/theme/components/card";

export default function App() {
  const [recipesData, setRecipesData] = useState([]);

  const [showAddRecipeForm, setShowAddRecipeForm] = useState(false)

  return (
    <div className="relative grid min-h-[100vh] w-screen p-8">
      <RecipeNavbar onAddRecipeClick={() => setShowAddRecipeForm(true)} />
      {showAddRecipeForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded shadow-lg relative w-screen m-10">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={() => setShowAddRecipeForm(false)}
            >
              &times;
            </button>
            <AddRecipeForm recipesData={recipesData} setRecipesData={setRecipesData} />
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {recipesData.map((recipe, index) => (
          <RecipeCard
            key={index}
            imgSrc={recipe.image}
            recipeName={recipe.recipeName}
            description={recipe.description}
            servings={recipe.servings}
            difficulty={recipe.difficulty}
            catagory={recipe.catagory}
            cuisineType={recipe.cuisineType}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}
