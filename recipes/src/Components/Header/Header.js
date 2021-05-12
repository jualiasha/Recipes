import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import { Nav } from "../Main/Main";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

import "./Header.css";

class Header extends Component {
  state = {
    recipesactive: false,
    aboutactive: false,
    homeactive: false,
    searchInput: "",
    recipes: "recipes",
    about: "about",
    home: "home",
  };

  render() {
    return (
      <header>
        <div className="container">
          <div className="navigation">
            <div className="logo">
              <Link id="logolink" to="/">
                <FavoriteBorderIcon style={{ fontSize: 38 }} />
                Recipes
              </Link>
            </div>
            <nav>
              <Nav />
            </nav>

            <Link id="button" to="/addrecipe" role="button">
              Add recipe
            </Link>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
