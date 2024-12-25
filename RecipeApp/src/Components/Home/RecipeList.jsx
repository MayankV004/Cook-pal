import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card"; // Import your Card component

const RecipeList = ({ startId, endId }) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const ids = Array.from(
        { length: endId - startId + 1 },
        (_, index) => startId + index
      );

      try {
        const recipePromises = ids.map((id) =>
          axios.get(
            `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
          )
        );
        const responses = await Promise.all(recipePromises);
        const recipeData = responses.map((response) => response.data.meals[0]); // Extract recipes
        setRecipes(recipeData);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };

    fetchRecipes();
  }, [startId, endId]);

  return (
    <div className="w-full flex flex-wrap justify-center gap-10">
      {recipes.map((recipe) => (
        <Card key={recipe.idMeal} recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipeList;
