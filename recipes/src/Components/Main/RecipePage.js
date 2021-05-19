import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";

import axios from "axios";
import Categories from "./Categories";
import "./RecipePage.css";

import { withStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    "&$checked": {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

const RecipePage = () => {
  const [recipe, setRecipe] = useState();
  const [state, setState] = useState({
    checked: false,
  });

  let location = useLocation();
  let history = useHistory();

  useEffect(() => {
    if (!recipe) {
      axios
        .get(
          "https://lit-sierra-74086.herokuapp.com/recipe/find/" +
            location.state.id
        )
        .then((res) => setRecipe(res.data));
    }
  });
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  let recipedata = undefined;

  if (!recipe) {
    recipedata = <h1>Loading...</h1>;
  }

  if (recipe) {
    const listingr = recipe.ingredients.map((i) => {
      return <li key={i}>{i}</li>;
    });
    const steplist = recipe.description.map((steps, number) => {
      return (
        <div key={steps} className="steps">
          <FormControlLabel
            control={
              <GreenCheckbox
                checked={state.checkedG}
                onChange={handleChange}
                name="checked"
                {...number}
              />
            }
            label={steps}
          />
        </div>
      );
    });
    recipedata = (
      <>
        <h1>{recipe.name}</h1>
        <div className="recipe-page">
          <div className="ingredients">
            <h3>Ingredients</h3>
            <img src="/assets/images/circle1.png" alt="ingredients decor" />
            <img src="/assets/images/circle2.png" alt="ingredients decor" />
            <img src="/assets/images/circle3.png" alt="ingredients decor" />
            <img src="/assets/images/circle4.png" alt="ingredients decor" />
            <img src="/assets/images/circle5.png" alt="ingredients decor" />
            <ol>{listingr}</ol>
          </div>
          <div className="recipe-steps">
            <div className="recipe-numbers">
              <img src={recipe.img} alt={recipe.name} />
              <div className="r-numbers">
                <p>Preparation Time: {recipe.prepTime}</p>
                <p>Cooking Time: {recipe.cookTime}</p>
                <p>Serve: {recipe.serves}</p>
              </div>
            </div>
            {steplist}
            <button
              onClick={() => {
                history.goBack();
              }}
            >
              Back to Recipes
            </button>
          </div>
          <Categories />
        </div>
      </>
    );
  }

  return <section>{recipedata}</section>;
};

export default RecipePage;
