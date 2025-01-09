import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { loadMore, fetchRecipes } from '../../store/recipesSlice';

function Load({ name }) {
  const dispatch = useDispatch();
  const currentPage = useSelector(state => state.recipes.currentPage);
  const status = useSelector(state => state.recipes.status);
  
  const handleLoadMore = () => {
    dispatch(loadMore());
    const startId = 52870 + (currentPage * 8);
    const endId = startId + 7;
    dispatch(fetchRecipes({ startId, endId }));
  };

  return (
    <div>
      <div className="flex justify-center items-center mt-10">
        <button
          onClick={handleLoadMore}
          disabled={status === 'loading'}
          className="flex justify-center items-center text-lg text-white rounded-lg px-[175px] py-3"
          style={{ backgroundColor: "#509E2F" }}
        >
          {status === 'loading' ? 'Loading...' : name}
        </button>
      </div>
    </div>
  );
}

export default Load;