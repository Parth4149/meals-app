import { useRef, useState, useEffect } from "react";
import LikeIcon from "../../assets/LikeIcon";

const Meal = ({ meal, selectMeal, addToFavorites }) => {
  const { idMeal, strMeal: title, strMealThumb: image } = meal;
  const [img, setImg] = useState();
  const mountedRef = useRef(true);

  useEffect(() => {
    const image = new Image();
    image.src = image;
    mountedRef.current = setTimeout(() => {
      setImg(image);
    }, 300);
    return () => {
      // when the component unmounts // cleanup
      clearInterval(mountedRef.current);
    };
  }, []);

  return (
    <>
      {img ? (
        <article className="meal">
          <img
            onClick={() => selectMeal(idMeal)}
            className="img"
            src={image}
            alt="title"
          />
          <footer>
            <h4>{title}</h4>
            <button onClick={() => addToFavorites(idMeal)} className="like-btn">
              <LikeIcon />
            </button>
          </footer>
        </article>
      ) : (
        <div className="skeleton">
          <div className="book__img--skeleton"></div>
          <div className="book__title--skeleton"></div>
        </div>
      )}
    </>
  );
};

export default Meal;
