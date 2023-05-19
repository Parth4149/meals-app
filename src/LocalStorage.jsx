export const getFavoritesFromLocalStorage = () => {
  let favorites = localStorage.getItem("favorites");
  if (favorites) {
    favorites = JSON.parse(favorites);
  } else {
    favorites = [];
  }
  return favorites;
};
