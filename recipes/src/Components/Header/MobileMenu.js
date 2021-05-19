import React from "react";
import { Link } from "react-router-dom";

const MobileMenu = ({ click }) => {
  return (
    <div id="mobilemenu">
      <ul>
        <li>
          <Link onClick={click} to="/">
            Home
          </Link>
        </li>
        <li>
          <ul>
            <Link onClick={click} to="/recipes">
              {" "}
              Recipes
            </Link>
            <li>
              <Link onClick={click} to="/Salads">
                Salads
              </Link>
            </li>
            <li>
              <Link onClick={click} to="/Soups">
                Soups
              </Link>
            </li>
            <li>
              <Link onClick={click} to="/Chicken">
                Chicken
              </Link>
            </li>
            <li>
              <Link onClick={click} to="/Fish">
                Fish
              </Link>
            </li>
            <li>
              <Link onClick={click} to="/Beef">
                Beef
              </Link>
            </li>
            <li>
              <Link onClick={click} to="/Sweets">
                Sweets
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link onClick={click} to="/about">
            About
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
