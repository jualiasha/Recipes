import React from "react";
import { Component } from "react";
import { Nav } from "../Main/Main";

import "./Header.css";

class Header extends Component {
  state = {
    current: false,
    searchInput: "",
  };

  CurrentLinkHandler = () => {
    if (this.href === window.location.href) {
      this.setState.current = true;
    } else {
      this.setState.current = false;
    }
  };

  render() {
    return (
      <header>
        <div className="container">
          <div className="navigation">
            <div className="logo">Recipes</div>
            <nav>
              <Nav /* current={(this.state.current = true)} */ />
            </nav>
            <button>Add recipe</button>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
