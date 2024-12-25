import React from "react";
import { LuChevronRight } from "react-icons/lu";
function ClickBtn() {
  return (
    <section className="flex justify-between mb-10">
      <button>
        <div className=" lg:w-64 lg:h-24 bg-[#F6784C] flex justify-center items-center rounded-xl text-white font-poppins text-md gap-5">
          Recipes & Menus
          <LuChevronRight size={22} />
        </div>
      </button>
      <button>
        <div className="lg:w-64 lg:h-24 bg-[#C4D600] flex justify-center items-center rounded-xl text-white font-poppins text-md gap-5">
          Share your recipe
          <LuChevronRight size={22} />
        </div>
      </button>
      <button>
        <div className=" lg:w-64 lg:h-24 bg-[#EAAA00] flex justify-center items-center rounded-xl text-white font-poppins text-md gap-5">
          Custom meal plan <LuChevronRight size={22} />
        </div>
      </button>
      <button>
        <div className="lg:w-64 lg:h-24 bg-[#ED8B00] flex justify-center items-center rounded-xl text-white font-poppins text-md gap-5">
          Create grocery list
          <LuChevronRight size={22} />
        </div>
      </button>
      <button>
        <div className="lg:w-64 lg:h-24 bg-[#84BD00] flex justify-center items-center rounded-xl text-white font-poppins text-md gap-5">
          Cooking Tips & Tricks
          <LuChevronRight size={22}/>
        </div>
      </button>
    </section>
  );
}

export default ClickBtn;
