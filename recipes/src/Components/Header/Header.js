import React from "react";
import { Component } from "react";
import Modal from "./Modal";
import { Nav } from "../Main/Main";

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

  clickHandler = (link) => {
    /* console.log(window.location.href); */
    if (this.state.recipes === link) {
      this.setState({ recipesactive: true });
      this.setState({ homeactive: false });
      this.setState({ aboutactive: false });
    } else if (this.state.about === link) {
      this.setState({
        aboutactive: true,
      });

      this.setState({ recipesactive: false });
      this.setState({ homeactive: false });
    } else if (this.state.home === link) {
      this.setState({
        homeactive: true,
      });
      this.setState({ recipesactive: false });
      this.setState({ aboutactive: false });
    } else {
      this.setState({
        homeactive: true,
      });
      this.setState({ recipesactive: false });
      this.setState({ aboutactive: false });
    }
  };
  /* loadhandler = () => {
    console.log(window.location.href);
  }; */

  render() {
    return (
      <header>
        <div className="container">
          <div className="navigation">
            <div className="logo">Recipes</div>
            <nav>
              <Nav
                recipesclick={() => this.clickHandler("recipes")}
                recipesactive={this.state.recipesactive}
                aboutclick={() => this.clickHandler("about")}
                aboutactive={this.state.aboutactive}
                homeclick={() => this.clickHandler("home")}
                homeactive={this.state.homeactive}
              />
            </nav>
            <Modal />
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
