import React from "react";
import { Link } from "react-router-dom";

const MobileMenu = () => {
  return (
    <div id="mobilemenu">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <ul>
            <Link to="/recipes"> Recipes</Link>
            <li>
              <Link to="/salads">Salads</Link>
            </li>
            <li>
              <Link to="/soups">Soups</Link>
            </li>
            <li>
              <Link to="/chicken">Chicken</Link>
            </li>
            <li>
              <Link to="/fish">Fish</Link>
            </li>
            <li>
              <Link to="/beef">Beef</Link>
            </li>
            <li>
              <Link to="/sweets">Sweets</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
