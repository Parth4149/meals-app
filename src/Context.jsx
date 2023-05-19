import React, { useContext, createContext, useState, useEffect } from "react";
import { getFavoritesFromLocalStorage } from "./LocalStorage";
import axios from "axios";
import Meals from "./components/Meals";

const AppContext = createContext(null);
const allMealsUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
const randomMealUrl = "https://www.themealdb.com/api/json/v1/1/random.php";

const AppProvider = ({ children }) => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState(null);

  const [favorites, setFavorites] = useState(getFavoritesFromLocalStorage());

  // console.log(meals);
  const fetchMeals = async (url) => {
    setLoading(true);
    try {
      const { data } = await axios.get(url);
      data.meals ? setMeals(data.meals) : setMeals([]); // check if data.meals is truthy
    } catch (e) {
      console.log(e.response);
    }
    setLoading(false);
  };

  const fetchRandomMeal = () => {
    setSearchTerm("");
    fetchMeals(randomMealUrl);
  };

  useEffect(() => {
    fetchMeals(allMealsUrl);
  }, []);
  useEffect(() => {
    if (!searchTerm) return;
    // console.log("fetch data here");
    fetchMeals(`${allMealsUrl}${searchTerm}`);
  }, [searchTerm]);

  const selectMeal = (idMeal, favoriteMeal) => {
    let meal;
    // when i click on img of Meals, the value of favoriteMeal becomes undefined
    // when i click on img of Favorites, the value of favoriteMeal becomes true
    if (favoriteMeal) {
      meal = favorites.find((meal) => meal.idMeal === idMeal);
    } else {
      meal = meals.find((meal) => meal.idMeal === idMeal);
    }
    // console.log(idMeal);
    setSelectedMeal(meal);
    setShowModal(true);
  };

  const addToFavorites = (idMeal) => {
    const alreadyFavorites = favorites.find((meal) => meal.idMeal === idMeal); // can use localStorage
    if (alreadyFavorites) return;
    //  if alreadyFavorites, there is no need to find meal
    let meal = meals.find((meal) => meal.idMeal === idMeal);
    const updatedFavorites = [...favorites, meal]; // OR favorites.push(meal);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  const removeFromFavorites = (idMeal) => {
    const updatedFavorites = favorites.filter((meal) => meal.idMeal !== idMeal);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <AppContext.Provider
      value={{
        loading,
        meals,
        setSearchTerm,
        fetchRandomMeal,
        showModal,
        setShowModal,
        selectMeal,
        selectedMeal,
        favorites,
        addToFavorites,
        removeFromFavorites,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
