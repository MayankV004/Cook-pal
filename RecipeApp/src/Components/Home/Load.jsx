import React from "react";

function Load({ name }) {
  return (
      <div>
        <div className="flex justify-center items-center mt-10 ">
          {/* Load More */}
          <button
            className="flex justify-center items-center text-lg text-white rounded-lg px-[175px] py-3"
            style={{ backgroundColor: "#509E2F" }}
          >
            {name}
          </button>
        </div>
      </div>
    
  );
}

export default Load;
