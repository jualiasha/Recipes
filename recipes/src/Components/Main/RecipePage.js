import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import Categories from "./Categories";
import "./RecipePage.css";

const RecipePage = () => {
  const [recipe, setRecipe] = useState();
  let { id } = useParams();
  let history = useHistory();

  useEffect(() => {
    if (!recipe) {
      axios
        .get("http://localhost:3001/recipes/" + id)
        .then((res) => setRecipe(res.data));
    }
  });
  let recipedata = undefined;

  if (!recipe) {
    recipedata = <h1>Loading...</h1>;
  }

  if (recipe) {
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
            <ol>
              <li>something</li>
              <li>something2</li>
              <li>something2</li>
              <li>something2</li>
              <li>something2</li>
              <li>something2</li>
              <li>something2</li>
              <li>something2</li>
              <li>something2</li>
              <li>something2</li>
              <li>something2</li>
              <li>something2</li>
              <li>something2</li>
              <li>something2</li>
            </ol>
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
            <p>{recipe.description}</p>
            <button
              onClick={() => {
                history.goBack();
              }}
            >
              Back to previous page
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
