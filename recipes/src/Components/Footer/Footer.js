import React from "react";
import { Link, useLocation } from "react-router-dom";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

import "./Footer.css";
/*Footer*/
const Footer = () => {
  let location = useLocation(); /*defines what path we have on the page*/

  /*different footer images for different routes*/
  const renderfooterimage = location.pathname.includes("recipes")
    ? "/assets/images/recipesfooter.png"
    : location.pathname.includes("about")
    ? "/assets/images/Starsfooter.png"
    : "/assets/images/homefooter.png";

  return (
    <footer>
      <div className="socials">
        <div className="logo">
          <Link id="logolink" to="/">
            <FavoriteBorderIcon style={{ fontSize: 38 }} />
            Recipes
          </Link>
        </div>
        <a
          href="https://github.com/jualiasha/Recipes-webApp/tree/master/recipes"
          target="_blanc"
        >
          <GitHubIcon
            style={{
              fontSize: 44,
              margin: "3rem 1rem 0 1rem",
              backgroundColor: "#b392e6",
            }}
          />
        </a>
        <a href="https://www.linkedin.com/in/jualiasha/" target="_blanc">
          <LinkedInIcon
            style={{
              fontSize: 44,
              margin: "3rem 1rem 0 1rem",
              backgroundColor: "#b392e6",
            }}
          />
        </a>
      </div>
      <div className="footerimage">
        <img src={renderfooterimage} alt="footerimage" />
      </div>
      <div className="footermenu">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/recipes">Recipes</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
