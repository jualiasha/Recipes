import React from "react";
import { Component } from "react";
/* import { Switch, Route, Link } from "react-router-dom";
import RecipeBox from "./RecipeBox"; */
import { SideNav } from "./Main";
import "./Categories.css";

class Categories extends Component {
  state = {
    /* salads: "Salads",
    soups: "Soups",
    beef: "Beef",
    pork: "Pork",
    chicken: "Chicken",
    fish: "Fish",
    vegan: "Vegan",
    sweets: "Sweets", */
    recipes: [],
    isLoading: false,
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch("http://localhost:3001/recipes")
      .then((res) => res.json())
      .then((data) => this.setState({ recipes: data, isLoading: false }));
  }

  render() {
    return (
      <div id="right">
        <h3>Categories</h3>
        <div className="side-bar">
          <SideNav />
        </div>
      </div>
    );
  }
}

export default Categories;
