import React, { Component } from "react";
import Categories from "./Categories";
import Search from "./Search";
import RecipeBox from "./RecipeBox";

class Sweetslist extends Component {
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
    const sweetsfilter = this.state.recipes.filter((recipes) => {
      return recipes.category
        .toLocaleLowerCase()
        .includes("sweets".toLocaleLowerCase());
    });
    const recipesfilter = sweetsfilter.filter((recipes) => {
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
      <div className="recipe-container">
        <div id="left">
          <Search search={this.SearchValueHandler} />
          <h2 className="category-name">Sweets</h2>
          <div className="recipeslist">{recipeslist}</div>
        </div>
        <Categories />
      </div>
    );
  }
}

export default Sweetslist;
