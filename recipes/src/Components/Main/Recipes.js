import React from "react";
import Search from "./Search";
import { Component } from "react";
import Categories from "./Categories";

import RecipeBox from "./RecipeBox";

class Recipes extends Component {
  state = {
    recipes: [],
    isLoading: false,
    searchInput: "",
  };
  componentDidMount() {
    this.setState({ isLoading: true });
    fetch("https://lit-sierra-74086.herokuapp.com/recipe/all")
      .then((res) => res.json())
      .then((data) => this.setState({ recipes: data, isLoading: false }));
  }
  searchValueHandler = (event) => {
    this.setState({ searchInput: event.target.value });
    console.log(this.state.searchInput);
  };
  render() {
    const recipesfilter = this.state.recipes.filter((recipes) => {
      return recipes.name
        .toLocaleLowerCase()
        .includes(this.state.searchInput.toLocaleLowerCase());
    });
    const recipeslist = recipesfilter.map((recipes) => {
      return (
        <RecipeBox
          key={recipes.id}
          name={recipes.name}
          ingredients={recipes.ingrnumber}
          serves={recipes.serves}
          preptime={recipes.prepTime}
          cooktime={recipes.cookTime}
          img={recipes.img}
          link={recipes.id}
        />
      );
    });
    return (
      <div className="recipe-container">
        <div id="left">
          <Search search={this.searchValueHandler} />
          <h2 className="category-name">Best recipes ever</h2>
          <div className="recipeslist">{recipeslist}</div>
        </div>
        <Categories />
      </div>
    );
  }
}

export default Recipes;
