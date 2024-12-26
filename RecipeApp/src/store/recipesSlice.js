import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const RECIPES_PER_PAGE = 8;

export const fetchRecipes = createAsyncThunk(
  'recipes/fetchRecipes',
  async ({ startId, endId }) => {
    const recipes = [];
    for (let id = startId; id <= endId; id++) {
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        if (response.data.meals) {
          recipes.push(response.data.meals[0]);
        }
      } catch (error) {
        console.error(`Error fetching recipe ${id}:`, error);
      }
    }
    return recipes;
  }
);

const recipesSlice = createSlice({
  name: 'recipes',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
    currentPage: 1,
    totalPages: 1,
  },
  reducers: {
    loadMore: (state) => {
      state.currentPage += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipes.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchRecipes.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = [...state.items, ...action.payload];
        state.totalPages = Math.ceil(state.items.length / RECIPES_PER_PAGE);
      })
      .addCase(fetchRecipes.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { loadMore } = recipesSlice.actions;
export default recipesSlice.reducer;