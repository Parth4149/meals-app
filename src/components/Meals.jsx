import { useGlobalContext } from "../Context";
import Meal from "./ui/Meal";

const Meals = () => {
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
      {meals.map((meal) => (
        <Meal
          meal={meal}
          key={meal.idMeal}
          selectMeal={selectMeal}
          addToFavorites={addToFavorites}
        />
      ))}
    </section>
  );
};

export default Meals;
