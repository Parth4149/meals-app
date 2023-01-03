import { useGlobalContext } from "../Context";

const Favorites = () => {
  const { favorites, selectMeal, removeFromFavorites } = useGlobalContext();
  return (
    <section className="favorites">
      <div className="favorites-content">
        <h5>Favorites</h5>
        <div className="favorites-container">
          {favorites.map((item) => {
            const { idMeal, strMealThumb: image } = item;
            return (
              <div key={idMeal} className="favorite-item">
                <img
                  onClick={() => selectMeal(idMeal, true)}
                  className="img favorites-img"
                  src={image}
                  alt="image"
                />
                <button
                  onClick={() => removeFromFavorites(idMeal)}
                  className="remove-btn"
                  type="button"
                >
                  Remove
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Favorites;
