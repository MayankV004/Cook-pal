import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Root from './Root.jsx'
import Home from './Components/Home/Home.jsx'
import Explore from './Components/Explore/Explore.jsx'
import Help from './Components/Help/Help.jsx'
import SearchRecipe from './Components/Header/SearchRecipe.jsx'
import RecipeDetail from './Components/Home/RecipeDetail.jsx'
import { Provider } from 'react-redux'
import { store } from './store'
import Login from './Components/login/Login.jsx'
import SignUp from './Components/signUp/SignUp.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />}>
      <Route path='' element={<Login/>}/>
      <Route path='signup' element={<SignUp/>}/>
      <Route path='home' element={<Home/>}/>
      <Route path='explore' element={<Explore/>}/>
      <Route path='help' element={<Help/>}/>
      <Route path='searchRecipe' element={<SearchRecipe/>}/>
      <Route path="recipe/:id" element={<RecipeDetail />} />
    
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  ,
)