import React, { useState } from "react";
import "./SearchBar.css";

const Search = ({ setCity, unit, setUnit }) => {
  const [input, setInput] = useState("");

  const handleSearch = () => {
    if (input.trim()) {
      setCity(input);
      setInput("");
    }
  };

  return (
    <div className="search">
      <input
        className="search__input"
        type="text"
        placeholder="Пошук міста"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
      />
      <button
        className="search__btn"
        onClick={() => setUnit(unit === "metric" ? "imperial" : "metric")}
      >
        {unit === "metric" ? "°C" : "°F"}
      </button>
    </div>
  );
};

export default Search;
