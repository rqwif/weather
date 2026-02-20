import React from "react";
import "./SearchBar.css";

const Search = () => {
  return (
    <div className="search">
      <input
        className="search__input"
        type="text"
        placeholder="Enter city..."
      />
      <button className="search__btn">°C</button>
    </div>
  );
};

export default Search;
