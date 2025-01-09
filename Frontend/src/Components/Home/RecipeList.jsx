import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipes } from '../../store/recipesSlice';
import Card from './Card';

function RecipeList({ startId, endId }) {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector(state => state.recipes);
  
  useEffect(() => {
    dispatch(fetchRecipes({ startId, endId }));
  }, [dispatch, startId, endId]);

  if (status === 'loading' && items.length === 0) {
    return <div className="text-center mt-4 text-[#509E2F] font-semibold">Loading recipes...</div>;
  }

  if (status === 'failed') {
    return <div className="text-center mt-4 text-red-500 font-semibold">Error: {error}</div>;
  }

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {items.map(recipe => (
        <Card key={recipe.idMeal} recipe={recipe} />
      ))}
    </div>
  );
}

export default RecipeList;