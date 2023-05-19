import { useState } from "react";
import { useGlobalContext } from "../Context";

const Search = () => {
  const [text, setText] = useState("");
  const { setSearchTerm, fetchRandomMeal } = useGlobalContext();

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text) {
      setSearchTerm(text);
      // setText("");
    }
    // e.target.reset();
  };

  return (
    <header className="search-container">
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          className="form-input"
          type="text"
          name="name"
          value={text}
          placeholder="type favorite meal"
          id="name"
          spellCheck={true}
        />
        <button className="btn btn-submit" type="submit">
          Submit
        </button>
        <button
          onClick={fetchRandomMeal}
          className="btn btn-hipster"
          type="button"
        >
          Surprise Me!
        </button>
      </form>
    </header>
  );
};

export default Search;
