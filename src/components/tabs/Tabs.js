import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../context/Context";
import "./tabs.css";

function Tabs() {
  const navigate = useNavigate();

  const { votes } = useContext(Context);

  return (
    <div className="tabs-container">
      <nav>
        <ul className="nav">
          <li className="nav-item">
            <button
              className="btn btn-dark text-light"
              onClick={() => navigate("/dishes")}
            >
              Dishes
            </button>
          </li>
          <li className="nav-item">
            <button
              className="btn btn-dark text-light"
              disabled={votes.length === 0 ? true : false}
              onClick={() => navigate("/selecteddishes")}
            >
              Selected Dishes
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Tabs;
