import React, { Component } from "react";
import Categories from "./Categories";
import Search from "./Search";
import RecipeBox from "./RecipeBox";

class Categorypage extends Component {
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
    searchInput: "",
  };
  componentDidMount() {
    this.setState({ isLoading: true });
    fetch("http://localhost:3001/recipes")
      .then((res) => res.json())
      .then((data) => this.setState({ recipes: data, isLoading: false }));
  }
  searchValueHandler = (event) => {
    this.setState({ searchInput: event.target.value });
    console.log(this.state.searchInput);
  };

  render() {
    const sweetsfilter = this.state.recipes.filter((recipes) => {
      return recipes.category
        .toLocaleLowerCase()
        .includes(this.state.sweets.toLocaleLowerCase());
    });

    const veganfilter = this.state.recipes.filter((recipes) => {
      return recipes.category
        .toLocaleLowerCase()
        .includes(this.state.vegan.toLocaleLowerCase());
    });
    const fishfilter = this.state.recipes.filter((recipes) => {
      return recipes.category
        .toLocaleLowerCase()
        .includes(this.state.fish.toLocaleLowerCase());
    });
    const chickenfilter = this.state.recipes.filter((recipes) => {
      return recipes.category
        .toLocaleLowerCase()
        .includes(this.state.chicken.toLocaleLowerCase());
    });
    const porkfilter = this.state.recipes.filter((recipes) => {
      return recipes.category
        .toLocaleLowerCase()
        .includes(this.state.pork.toLocaleLowerCase());
    });
    const beeffilter = this.state.recipes.filter((recipes) => {
      return recipes.category
        .toLocaleLowerCase()
        .includes(this.state.beef.toLocaleLowerCase());
    });
    const soupsfilter = this.state.recipes.filter((recipes) => {
      return recipes.category
        .toLocaleLowerCase()
        .includes(this.state.soups.toLocaleLowerCase());
    });
    const saladsfilter = this.state.recipes.filter((recipes) => {
      return recipes.category
        .toLocaleLowerCase()
        .includes(this.state.salads.toLocaleLowerCase());
    });
    const location = window.location.href;
    console.log(location);
    const whatpage = location.includes("Vegan")
      ? veganfilter
      : location.includes("Sweets")
      ? sweetsfilter
      : location.includes("Fish")
      ? fishfilter
      : location.includes("Chicken")
      ? chickenfilter
      : location.includes("Pork")
      ? porkfilter
      : location.includes("Beef")
      ? beeffilter
      : location.includes("Soups")
      ? soupsfilter
      : location.includes("Salads")
      ? saladsfilter
      : "Page is not found";
    const recipesfilter = whatpage.filter((recipes) => {
      return recipes.name
        .toLocaleLowerCase()
        .includes(this.state.searchInput.toLocaleLowerCase());
    });

    const whatpagename = location.includes("Vegan")
      ? this.state.vegan
      : location.includes("Sweets")
      ? this.state.sweets
      : location.includes("Fish")
      ? this.state.fish
      : location.includes("Chicken")
      ? this.state.chicken
      : location.includes("Pork")
      ? this.state.pork
      : location.includes("Beef")
      ? this.state.beef
      : location.includes("Soups")
      ? this.state.soups
      : location.includes("Salads")
      ? this.state.salads
      : "Page is not found";

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
          <h2 className="category-name">{whatpagename}</h2>
          <div className="recipeslist">{recipeslist}</div>
        </div>
        <Categories />
      </div>
    );
  }
}

export default Categorypage;
