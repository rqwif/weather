import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar glass">
      <h3>Saved Cities</h3>

      <div className="sidebar__item">
        <p>Kyiv</p>
        <button>×</button>
      </div>

      <div className="sidebar__item">
        <p>Lviv</p>
        <button>×</button>
      </div>
    </div>
  );
};

export default Sidebar;
