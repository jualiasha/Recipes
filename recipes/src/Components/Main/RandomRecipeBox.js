import React, { useState } from "react";
import { Link } from "react-router-dom";

const RecipeBox = () => {
  const [state, setState] = useState({
    ingredients,
    img,
    name,
    serves,
    preptime,
    cooktime,
    link,
    randomcolor,
  });

  const boxcolors = [
    "box-pink",
    "box-green",
    "box-blue",
    "box-yellow",
    "box-orange",
    "box-purple",
    "",
  ];

  let newboxcolor = () => {
    for (let i = 0; i <= boxcolors.length; i++) {
      return boxcolors[i];
    }
  };
  boxcolors[Math.floor(Math.random() * (boxcolors.length + 1))];
  return (
    <>
      <Link to={`recipes/${link}`}>
        <div className="recipe-box">
          <h2>{name}</h2>
          <div className={`box ${randomcolor}`}>
            <img className="a" src={img} alt={name} />
            <p className="b">Ingridients: {ingredients}</p>
            <p className="c">Serves:{serves}</p>
            <p className="d">PrepTime:{preptime}min</p>
            <p className="e">CookTime: {cooktime}min</p>
          </div>
          <div className="shadow"></div>
        </div>
      </Link>
    </>
  );
};

export default RecipeBox;
