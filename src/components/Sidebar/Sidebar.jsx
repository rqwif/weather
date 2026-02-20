import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar glass">
      <p className="sidebar__name">збережені міста</p>

      <div className="sidebar__item">
        <p>Київ</p>
        <button>×</button>
      </div>

      <div className="sidebar__item">
        <p>Львів</p>
        <button>×</button>
      </div>
    </div>
  );
};

export default Sidebar;
