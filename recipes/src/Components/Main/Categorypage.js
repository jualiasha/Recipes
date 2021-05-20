import React, { Component } from "react";
import Categories from "./Categories";
import Searchui from "./Searchui";
import RecipeBox from "./RecipeBox";
import Loading from "./Loading";

class Categorypage extends Component {
  /*state to define what category page is chosen*/
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
    fetch("https://lit-sierra-74086.herokuapp.com/recipe/all")
      .then((res) => res.json())
      .then((data) => this.setState({ recipes: data, isLoading: false }));
  }

  /*setting search input*/
  searchValueHandler = (event) => {
    this.setState({ searchInput: event.target.value });
    console.log(this.state.searchInput);
  };

  render() {
    /*filtering categories that include sweets*/
    const sweetsfilter = this.state.recipes.filter((recipes) => {
      return recipes.category
        .toLocaleLowerCase()
        .includes(this.state.sweets.toLocaleLowerCase());
    });

    /*filtering categories that include vegan*/
    const veganfilter = this.state.recipes.filter((recipes) => {
      return recipes.category
        .toLocaleLowerCase()
        .includes(this.state.vegan.toLocaleLowerCase());
    });

    /*filtering categories that include fish*/
    const fishfilter = this.state.recipes.filter((recipes) => {
      return recipes.category
        .toLocaleLowerCase()
        .includes(this.state.fish.toLocaleLowerCase());
    });

    /*filtering categories that include chicken*/
    const chickenfilter = this.state.recipes.filter((recipes) => {
      return recipes.category
        .toLocaleLowerCase()
        .includes(this.state.chicken.toLocaleLowerCase());
    });

    /*filtering categories that include pork*/
    const porkfilter = this.state.recipes.filter((recipes) => {
      return recipes.category
        .toLocaleLowerCase()
        .includes(this.state.pork.toLocaleLowerCase());
    });

    /*filtering categories that include beef*/
    const beeffilter = this.state.recipes.filter((recipes) => {
      return recipes.category
        .toLocaleLowerCase()
        .includes(this.state.beef.toLocaleLowerCase());
    });

    /*filtering categories that include soups*/
    const soupsfilter = this.state.recipes.filter((recipes) => {
      return recipes.category
        .toLocaleLowerCase()
        .includes(this.state.soups.toLocaleLowerCase());
    });

    /*filtering categories that include salads*/
    const saladsfilter = this.state.recipes.filter((recipes) => {
      return recipes.category
        .toLocaleLowerCase()
        .includes(this.state.salads.toLocaleLowerCase());
    });

    /*defining location of page*/
    const location = window.location.href;

    /*define what category of page to show*/
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

    /*searchfilter by input*/
    const recipesfilter = whatpage.filter((recipes) => {
      return recipes.name
        .toLocaleLowerCase()
        .includes(this.state.searchInput.toLocaleLowerCase());
    });

    /*define page header*/
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

    /*forming recipes list*/
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
      <>
        <div className="searchpart">
          <Searchui search={this.searchValueHandler} />
        </div>

        <div className="recipe-container">
          <div id="left">
            <h2 className="category-name">{whatpagename}</h2>
            {this.state.isLoading && <Loading />}
            <div className="recipeslist">{recipeslist}</div>
          </div>
          <Categories />
        </div>
      </>
    );
  }
}

export default Categorypage;
