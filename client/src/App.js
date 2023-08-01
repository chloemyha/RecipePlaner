import "./App.css";
import HomePage from "./pages/HomePage";
import RecipeList from "./pages/RecipeList";
import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./index.css";
import NavBar from "./components/NavBar";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import RecipeDetails from "./pages/RecipeDetails";
import Footer from "./components/Footer";
import AddRecipe from "./pages/AddRecipe";
import FavoriteRecipe from "./pages/FavoriteRecipe";
import ShoppingList from "./pages/ShoppingList";
import GroceryLocation from "./pages/GroceryLocation";
import VerificationCodePage from "./pages/VerificationCodePage";
import ForgotPasswordForm from "./pages/ForgotPassword";
import NewPassword from "./pages/NewPassword";
import Logout from "./pages/Logout";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <div className="page.body">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
            <Route path="/recipe" element={<RecipeList />} />
            <Route path="/login" element={<Login />} />
            <Route path="/addrecipe" element={<AddRecipe />} />
            <Route path="/favoriterecipe" element={<FavoriteRecipe />} />
            <Route path="/shoppinglist" element={<ShoppingList />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/grocery" element={<GroceryLocation />} />
            <Route path="/verify-email" element={<VerificationCodePage/>} />
            <Route path="/reset-password" element={<ForgotPasswordForm/>} />
          <Route path="/update-password" element={<NewPassword/>} />
          <Route path="/logout" element={<Logout/>} />

          </Routes>
        </div>
       
      </div>
    </BrowserRouter>
  );
}

export default App;
