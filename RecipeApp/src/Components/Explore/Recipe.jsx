import React from 'react'
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa6";
function Recipe() {
  return (
    <>
    <div className="relative mt-12 py-8 px-20 md:w-full md:h-96 bg-[#509E2F] text-white flex flex-col items-center gap-8 rounded-sm">
        <div className="flex items-center gap-2">
          <Link to="/" className="font-bold text-lg hover:underline">
            Cookpal
          </Link>
          <FaAngleRight />

          <h3 className="font-bold text-lg ">Explore</h3>
        </div>
        <div className="flex flex-col gap-8 items-center md:max-w-5xl">
          <h1 className="font-semibold text-6xl tracking-tighter text-white/90">
            Recipes
          </h1>
          <p className="text-2xl text-white/70">
            Welcome to Cookpal, where cooking meets creativity! Explore a wide
            range of delicious recipes, from hearty meals to quick snacks, and
            transform your kitchen into a gourmet paradise. Whether you're a
            seasoned chef or just starting your culinary journey, Cookpal has
            something for everyone.
          </p>
        </div>
      </div>
    </>
  )
}

export default Recipe