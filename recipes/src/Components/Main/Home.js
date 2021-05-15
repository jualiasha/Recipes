import React from "react";
import { Component } from "react";
import RecipeBox from "./RecipeBox";

class Home extends Component {
  state = {
    recipes: [],
    isLoading: false,
  };
  componentDidMount() {
    this.setState({ isLoading: true });
    fetch("https://lit-sierra-74086.herokuapp.com/recipe/all")
      .then((res) => res.json())
      .then((data) => this.setState({ recipes: data, isLoading: false }));
  }

  render() {
    const recipeslist = this.state.recipes.map((recipes) => {
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
      <section>
        <h1>
          Today people choose
          <img className="decor" src="/assets/images/Wine.png" alt="wine" />
        </h1>

        <div className="recipeslist">{recipeslist}</div>
      </section>
    );
  }
}

export default Home;
