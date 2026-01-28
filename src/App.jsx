import RecipeNavbar from "./components/RecipeNavbar";
import Footer from "./components/Footer";
import RecipeCard from "./components/RecipeCard";
import AddRecipeForm from "./components/AddRecipeForm";
import { useState } from "react";

export default function App() {
  const [recipesData, setRecipesData] = useState([]);

  const [showAddRecipeForm, setShowAddRecipeForm] = useState(false)
  const [showRecipe, setShowRecipe] = useState(false)
  const [recipeIndex, setRecipeIndex] = useState(null)

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

      {showRecipe && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl border border-gray-100">

            {/* Close button */}
            <button
              onClick={() => setShowRecipe(false)}
              className="absolute top-4 right-4 z-10 flex items-center justify-center w-10 h-10 text-gray-500 hover:text-gray-800 hover:bg-gray-100 rounded-full transition-colors duration-200"
              aria-label="Close modal"
            >
              <span className="text-2xl leading-none">×</span>
            </button>

            {/* Header / Hero section */}
            <div className="relative">
              {recipesData[recipeIndex]?.image ? (
                <div className="h-64 sm:h-72 overflow-hidden rounded-t-2xl">
                  <img
                    src={recipesData[recipeIndex].image}
                    alt={recipesData[recipeIndex].recipeName}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="h-64 sm:h-72 bg-gradient-to-br from-gray-100 to-gray-200 rounded-t-2xl flex items-center justify-center">
                  <span className="text-6xl opacity-30">🍳</span>
                </div>
              )}

              {/* Title overlay on image */}
              <div className="absolute bottom-0 left-0 right-0 px-8 pb-6 pt-12 bg-gradient-to-t from-black/70 to-transparent">
                <h2 className="text-3xl sm:text-4xl font-bold text-white drop-shadow-lg">
                  {recipesData[recipeIndex].recipeName}
                </h2>
              </div>
            </div>

            {/* Main content */}
            <div className="p-6 sm:p-8">
              {/* Quick info badges */}
              <div className="flex flex-wrap gap-3 mb-6">
                {recipesData[recipeIndex].servings && (
                  <div className="inline-flex items-center px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                    <span className="mr-1.5">👥</span>
                    {recipesData[recipeIndex].servings} servings
                  </div>
                )}
                {recipesData[recipeIndex].difficulty && (
                  <div className="inline-flex items-center px-4 py-1.5 bg-amber-50 text-amber-800 rounded-full text-sm font-medium">
                    <span className="mr-1.5">⚡</span>
                    {recipesData[recipeIndex].difficulty}
                  </div>
                )}
                {recipesData[recipeIndex].cuisineType && (
                  <div className="inline-flex items-center px-4 py-1.5 bg-green-50 text-green-700 rounded-full text-sm font-medium">
                    <span className="mr-1.5">🌍</span>
                    {recipesData[recipeIndex].cuisineType}
                  </div>
                )}
                {recipesData[recipeIndex].catagory && (
                  <div className="inline-flex items-center px-4 py-1.5 bg-purple-50 text-purple-700 rounded-full text-sm font-medium">
                    <span className="mr-1.5">📋</span>
                    {recipesData[recipeIndex].catagory}
                  </div>
                )}
              </div>

              {/* Description */}
              {recipesData[recipeIndex].description && (
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Description</h3>
                  <p className="text-gray-700 leading-relaxed">
                    {recipesData[recipeIndex].description}
                  </p>
                </div>
              )}

              {/* Ingredients Section */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <span className="inline-block w-8 h-8 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-lg">✓</span>
                  Ingredients
                </h3>

                {recipesData[recipeIndex].ingredients?.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {recipesData[recipeIndex].ingredients.map((ing, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors border border-gray-200"
                      >
                        <div className="flex-shrink-0 mt-0.5">
                          <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2"></div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-medium text-gray-900">
                            {ing.quantity} {ing.measurementUnit}
                          </div>
                          <div className="text-gray-700">{ing.ingredientName}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500 italic">No ingredients added yet.</p>
                )}
              </div>

            </div>

            {/* Footer */}
            <div className="px-8 py-6 border-t border-gray-100 bg-gray-50 rounded-b-2xl flex justify-end">
              <button
                onClick={() => setShowRecipe(false)}
                className="px-6 py-2.5 bg-gray-800 text-white font-medium rounded-lg hover:bg-gray-900 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Recipe card */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {recipesData.map((recipe, index) => (
          <RecipeCard
            onAddRecipeClick={() => setShowRecipe(true)}
            setRecipeIndex={setRecipeIndex}
            key={index}
            index={index}
            imgSrc={recipe.image}
            recipeName={recipe.recipeName}
            description={recipe.description}
            servings={recipe.servings}
            difficulty={recipe.difficulty}
            catagory={recipe.catagory}
            cuisineType={recipe.cuisineType}
            recipesData={recipesData}
            setRecipesData={setRecipesData}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}
