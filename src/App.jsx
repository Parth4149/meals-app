import "./App.css";

import { Search, Modal, Favorites, Meals } from "./components";

import { useGlobalContext } from "./Context";

function App() {
  const { showModal, favorites } = useGlobalContext();

  return (
    <div className="App">
      <Search />
      {favorites.length > 0 && <Favorites />}
      <Meals />
      {showModal && <Modal />}
    </div>
  );
}

export default App;
