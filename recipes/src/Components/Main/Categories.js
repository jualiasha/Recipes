import React from "react";
import { Component } from "react";
/* import { Switch, Route, Link } from "react-router-dom";
import RecipeBox from "./RecipeBox"; */
import { SideNav } from "./Main";
import "./Categories.css";

class Categories extends Component {
  state = {
    salads: "Salads",
    soups: "Soups",
    beef: "Beef",
    pork: "Pork",
    chicken: "Chicken",
    fish: "Fish",
    vegan: "Vegan",
    sweets: "Sweets",
    recipes: [],
    isLoading: false,
  };

  render() {
    return (
      <div id="right">
        <h3>Categories</h3>
        <div className="side-bar">
          <SideNav
            sweetslink={this.state.sweets}
            saladslink={this.state.salads}
            soupslink={this.state.soups}
            beeflink={this.state.beef}
            porklink={this.state.pork}
            chickenlink={this.state.chicken}
            fishlink={this.state.fish}
            veganlink={this.state.vegan}
          />
        </div>
      </div>
    );
  }
}

export default Categories;
