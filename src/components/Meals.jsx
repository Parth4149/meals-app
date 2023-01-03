import React from "react";
import { useContext } from "react";
import { useGlobalContext } from "../Context";
// import icons
import LikeIcon from "../icons/LikeIcon";

const Meals = () => {
  const root = getComputedStyle(document.querySelector(":root"));

  const { loading, meals, selectMeal, addToFavorites } = useGlobalContext();

  if (loading) {
    return (
      <section className="section section-center">
        <h3>Loading...</h3>
      </section>
    );
  }

  if (meals.length < 1) {
    return (
      <section className="section section-center">
        <code>No meals marched your search term. Please try again...</code>
      </section>
    );
  }

  return (
    <section className="section-center meals">
      {meals.map((meal) => {
        const { idMeal, strMeal: title, strMealThumb: image } = meal;
        <h4>title</h4>;
        return (
          <article className="meal" key={idMeal}>
            <img
              onClick={() => selectMeal(idMeal)}
              className="img"
              src={image}
              alt="title"
            />
            <footer>
              <h4>{title}</h4>
              <button onClick={() => addToFavorites(idMeal)} className="like-btn">
                <LikeIcon fill={root.getPropertyValue("--black")} />
              </button>
            </footer>
          </article>
        );
      })}
    </section>
  );
};

export default Meals;
