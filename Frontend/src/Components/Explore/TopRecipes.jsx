import React from 'react'
import RecipeList from "../Home/RecipeList";
import Load from "../Home/Load";
function TopRecipes() {
  return (
    <>
     <div className="flex items-center justify-center my-20 ">
        <div className="max-w-4xl flex flex-col gap-7">
          <div className="flex items-center justify-center gap-3">
            <img src="src\Components\Explore\trophy.jpg" alt="" width={55} />
            <h1 className="text-[#509E2F] font-semibold text-3xl">
              Top Rated Recipes
            </h1>
          </div>
          <p className="block text-2xl text-black/60 text-center">
            Out of all the many recipes on Cookpal, these are our shining
            stars - the recipes we come back to again and again (and again).
          </p>
        </div>
      </div>

      <RecipeList startId={52900} endId={52901}  />
      <Load name={"View All Recipes"}/>
    </>
  )
}

export default TopRecipes