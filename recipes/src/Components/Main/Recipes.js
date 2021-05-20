import React from "react";
import { Component } from "react";
import Categories from "./Categories";
import Searchui from "./Searchui";
import RecipeBox from "./RecipeBox";
import Loading from "./Loading"

/*All recipes page*/
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

  /*getting serach input*/
  searchValueHandler = (event) => {
    this.setState({ searchInput: event.target.value });
    console.log(this.state.searchInput);
  };
  render() {
    /*filtering recipes according to the searchinput*/
    const recipesfilter = this.state.recipes.filter((recipes) => {
      return recipes.name
        .toLocaleLowerCase()
        .includes(this.state.searchInput.toLocaleLowerCase());
    });

    /*random colors for recipe cards*/
    const boxcolors = [
      "box-pink",
      "box-green",
      "box-blue",
      "box-yellow",
      "box-orange",
      "box-purple",
    ];

    /*making list of recipe cards*/
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
          id={recipes.id}
          randomcolor={boxcolors[Math.floor(Math.random() * boxcolors.length)]}
        />
      );
    });
    return (
      <>
        <div className="searchpart">
          <Searchui search={this.searchValueHandler} />
        </div>
        <div className="recipe-container">
          <div id="left">
            <h2 className="category-name">Best recipes ever</h2>
            {this.state.isLoading&&<Loading/>}
            <div className="recipeslist">{recipeslist}</div>
          </div>
          <Categories />
        </div>
      </>
    );
  }
}

export default Recipes;
