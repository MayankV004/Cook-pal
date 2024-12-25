import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SearchBar({ setSearchResults }) {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const fetchData = async () => {
    if (!query.trim()) {
      alert("Please enter a search term.");
      return;
    }

    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
      );
      const recipeData = response.data.meals || [];
      setSearchResults(recipeData);
      navigate("/searchRecipe", { state: { results: recipeData } });
    } catch (error) {
      console.error("Error fetching data:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="flex border border-gray-300 rounded">
      <select
        name="AllCategories"
        id="allCategories"
        style={{ backgroundColor: "#F3F3F3" }}
        defaultValue="AllCategories"
        className="p-2 font-medium border-none focus:outline-none"
      >
        <option value="AllCategories" disabled hidden>
          All Categories
        </option>
        <option value="Lunch">Lunch</option>
        <option value="Breakfast">Breakfast</option>
        <option value="Dinner">Dinner</option>
      </select>
      <p className="px-2 text-2xl text-gray-300 py-1" style={{ backgroundColor: "#F3F3F3" }}>
        |
      </p>
      <input
        type="text"
        placeholder="Search for recipes..."
        value={query}
        className="w-64 h-10 p-3 border-none focus:outline-none"
        onChange={(e) => setQuery(e.target.value)}
        style={{ backgroundColor: "#F3F3F3", width: 350 }}
      />
      <button className="hover:scale-110" onClick={fetchData}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="55"
          height="45"
          fill="white"
          className="bi bi-search"
          viewBox="0 0 16 16"
          style={{ backgroundColor: "#509E2F", margin: 0, padding: 10 }}
        >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
        </svg>
      </button>
    </div>
  );
}

export default SearchBar;
