import { useLocation } from "react-router-dom";
import Card from "../Home/Card";
function SearchRecipe() {
  const location = useLocation();
  const recipes = location.state?.results || [];

  return (
    <div className="flex flex-wrap gap-4 mt-10 ml-10">
      {recipes.length ? (
        recipes.map((recipe) => (
          <div key={recipe.idMeal}>
            <Card recipe={recipe} />
          </div>
        ))
      ) : (
        <p>No recipes found. Try a different search.</p>
      )}
    </div>
  );
}

export default SearchRecipe;
