import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ recipe }) => {
  const [isLiked, setIsLiked] = useState(false);
  const navigate = useNavigate();

  const handleLikeClick = (e) => {
    e.stopPropagation(); // Prevent card click when clicking like button
    setIsLiked(!isLiked);
  };

  const handleCardClick = () => {
    navigate(`/recipe/${recipe.idMeal}`);
  };

  return (
    <div
      onClick={handleCardClick}
      className="w-80 h-64 p-2 pt-3 flex flex-col justify-center items-center bg-white overflow-hidden rounded-lg hover:opacity-60 rounded-md cursor-pointer transition duration-300 ease-in-out shadow-sm hover:shadow-md"
    >
      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        className="w-80 h-40 object-cover rounded-xl"
      />

      <div className="p-2 w-full flex flex-col">
        <p className="text-linkGray">{recipe.strCategory}</p>
        <div className="flex justify-between items-center">
          <h2 className="font-poppins font-semibold text-md text-[#252525] truncate">
            {recipe.strMeal}
          </h2>
          <img
            src="src/utilities/card/rating.png"
            alt=""
            className="w-10 h-4"
          />
        </div>

        <div className="flex justify-between items-center">
          <p className="text-[#DC582A] font-poppins font-medium">
            {recipe.strArea}
          </p>
          <div className="flex justify-between items-center gap-3">
            <button
              className="flex justify-between items-center gap-3"
              onClick={handleLikeClick}
            >
              {isLiked ? (
                <img
                  src="src/utilities/card/Rlike.png"
                  alt="Liked"
                  className="w-5 h-5"
                />
              ) : (
                <img
                  src="src/utilities/card/like.png"
                  alt="Not liked"
                  className="w-5 h-5"
                />
              )}
            </button>
            <img
              src="src/utilities/card/comments.png"
              alt=""
              className="w-5 h-5"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;