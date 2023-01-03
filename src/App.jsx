import { useState } from "react";
import "./App.css";

import Search from "./components/Search";
import Modal from "./components/Modal";
import Favorites from "./components/Favorites";
import Meals from "./components/Meals";

import { useGlobalContext } from "./Context";

function App() {
  const [count, setCount] = useState(0);

  const { showModal, favorites } = useGlobalContext();``

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
