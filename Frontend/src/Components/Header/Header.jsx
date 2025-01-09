import React, { useState } from "react";
import { NavLink , useNavigate } from "react-router-dom";
import Hamburger from "./Hamburger.svg";
import SearchBar from "./SearchBar";


function Header() {
  const [searchResults, setSearchResults] = useState([]);
  const Navigate = useNavigate()
  const toHome = ()=>{
    Navigate('/home')
  }
  return (
    <>
      <nav>
        <div id="navBar" className="w-full flex justify-between">
          <div className="w-[50%] flex justify-between">
            <div id="Hamburger" className="flex gap-6">
              <img src={Hamburger} alt="" width="25px" className="hidden" />
              <img
                src="src/images/Cookpal 1.png"
                alt=""
                width="96px"
                height="46px"
                onClick={toHome}

              />
            </div>
            <div
              id="SearchBar"
              className="w-96 flex justify-center items-center border border-none"
            >
              <SearchBar setSearchResults={setSearchResults} />
            </div>
          </div>
          <div className="w-80 lg:flex justify-between">
            <div
              id="Pages"
              className="hidden lg:flex items-center m-auto"
            >
              <ul className="flex flex-col lg:justify-center mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <NavLink
                    to="/home"
                    className={(e) =>
                      `block py-2 pr-4 pl-3 duration-200 ${
                        e.isActive ? "text-green-700" : "text-gray-700"
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-green-700 lg:p-0`
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/explore"
                    className={(e) =>
                      `block py-2 pr-4 pl-3 duration-200 ${
                        e.isActive ? "text-green-700" : "text-gray-700"
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-green-700 lg:p-0`
                    }
                  >
                    Explore
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/help"
                    className={(e) =>
                      `block py-2 pr-4 pl-3 duration-200 ${
                        e.isActive ? "text-green-700" : "text-gray-700"
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-green-700 lg:p-0`
                    }
                  >
                    Help
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/searchRecipe"
                    state={{ searchResults }}
                  >
                 
                  </NavLink>
                </li>
              </ul>
            </div>
            <img src="src/images/Ellipse 2.png" alt="" className="w-10 h-10" />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
