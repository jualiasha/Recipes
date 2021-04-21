import React from "react";

const RecipeBox = ({ ingredients, img, name, serves, preptime, cooktime }) => {
  return (
    <div>
      <div className="recipe-box">
        <h2>{name}</h2>
        <div className="box">
          <img className="a" src={img} alt={name} />
          <p className="b">Ingridients: {ingredients}</p>
          <p className="c">Serves:{serves}</p>
          <p className="d">PrepTime:{preptime}min</p>
          <p className="e">CookTime: {cooktime}min</p>
        </div>
        <div className="shadow"></div>
      </div>
    </div>
  );
};

export default RecipeBox;
