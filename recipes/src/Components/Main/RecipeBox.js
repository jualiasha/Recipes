import React from "react";
import { Link } from "react-router-dom";

/*recipe card*/
const RecipeBox = ({
  ingredients,
  img,
  name,
  serves,
  preptime,
  cooktime,
  id,
  randomcolor,
}) => {
  return (
    <>
      {/* <Link to={`recipes/${link}`}> */}
      <Link
        to={{
          pathname: `recipes/${name.split(" ").join("-")}`,
          state: { id },
        }}
      >
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
