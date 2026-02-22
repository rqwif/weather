import React from "react";
import "./Sidebar.css";

const Sidebar = ({ cities, onSelect, onRemove }) => {
  return (
    <div className="sidebar glass">
      <p className="sidebar__name">збережені міста</p>

      {cities.map((city) => (
        <div className="sidebar__item" key={city}>
          <p onClick={() => onSelect(city)}>{city}</p>
          <button onClick={() => onRemove(city)}>×</button>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
