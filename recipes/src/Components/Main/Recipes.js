import React from "react";
import Search from "./Search";
import { Component } from "react";
import RecipeBox from "./RecipeBox";

class Recipes extends Component {
  state = {
    recipes: [],
    isLoading: false,
    searchInput: "",
  };
  componentDidMount() {
    this.setState({ isLoading: true });
    fetch("http://localhost:3001/recipes")
      .then((res) => res.json())
      .then((data) => this.setState({ recipes: data, isLoading: false }));
  }
  SearchValueHandler = (event) => {
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
        />
      );
    });
    return (
      <div>
        <Search search={this.SearchValueHandler} />
        <div className="recipeslist">{recipeslist}</div>
      </div>
    );
  }
}

export default Recipes;
