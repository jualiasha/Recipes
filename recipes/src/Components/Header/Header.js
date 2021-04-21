import React from "react";
import { Component } from "react";
import { Nav } from "../Main/Main";
import Search from "./Search";

import "./Header.css";

class Header extends Component {
  state = {
    active: false,
    searchInput: "",
  };

  CurrentLinkHandler = () => {};

  SearchValueHandler = (event) => {
    this.setState({ searchInput: event.target.value });
    console.log(this.state.searchInput);
  };

  render() {
    return (
      <header>
        <div className="container">
          <div className="navigation">
            <div className="logo">Recipes</div>
            <nav>
              <Nav />
            </nav>
            <Search search={this.SearchValueHandler} />
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
