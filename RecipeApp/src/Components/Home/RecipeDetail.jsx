import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const RecipeDetail = () => {
  const [recipe, setRecipe] = useState(null);
  const [ingredients, setIngredients] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRecipeDetail = async () => {
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        if (response.data.meals) {
          const recipeData = response.data.meals[0];
          setRecipe(recipeData);
          
          // Extract ingredients and measurements
          const ingredientsList = [];
          for (let i = 1; i <= 20; i++) {
            const ingredient = recipeData[`strIngredient${i}`];
            const measure = recipeData[`strMeasure${i}`];
            if (ingredient && ingredient.trim() !== '') {
              ingredientsList.push({ ingredient, measure });
            }
          }
          setIngredients(ingredientsList);
        }
      } catch (error) {
        console.error('Error fetching recipe:', error);
      }
    };

    if (id) {
      fetchRecipeDetail();
    }
  }, [id]);

  if (!recipe) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 flex items-center text-green-700 hover:text-green-800"
      >
        <svg
          className="w-5 h-5 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
        Back
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img
            src={recipe.strMealThumb}
            alt={recipe.strMeal}
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        </div>

        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {recipe.strMeal}
          </h1>
          <div className="mb-6">
            <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold mr-2">
              {recipe.strCategory}
            </span>
            <span className="inline-block bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-semibold">
              {recipe.strArea}
            </span>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Ingredients</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {ingredients.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center space-x-2 text-gray-700"
                >
                  <span className="w-4 h-4 bg-green-500 rounded-full"></span>
                  <span className="font-medium">{item.measure}</span>
                  <span>{item.ingredient}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Instructions</h2>
            <p className="text-gray-700 whitespace-pre-line">
              {recipe.strInstructions}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;