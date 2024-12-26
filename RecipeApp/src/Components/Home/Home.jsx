import React from "react";
import Load from "./Load";
import RecipeList from "./RecipeList";
import ClickBtn from "./ClickBtn";
import SlideImg from "./SlideImg";

function Home() {
  return (
    <>
      <div className="mt-14">
        <SlideImg />
        <ClickBtn />

        <RecipeList startId={52851} endId={52858} />
        <h1 className="text-4xl font-poppins font-semibold my-8">
          Recommended Recipes
        </h1>
      
        <RecipeList startId={52863} endId={52870} />
        
        <div className="mt-10">
          <Load name={"Load More"} />
        </div>
      </div>
    </>
  );
}

export default Home;