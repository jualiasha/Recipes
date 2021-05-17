import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import "./Footer.css";

const Footer = ({ image }) => {
  /* const [image, setImage] = useState({
    homeimage: "/footerhome",
    recipeimage: "/footereipe",
    recipepage: "/recipepage",
  });
  let location = useLocation();
  const handleImage = () => {
    if (location.pathname === "/recipes") {
      return setImage(image.recipeimage);
    } else if (location.pathname === "/") {
      return setImage(image.homeimage);
    } else {
      setImage(image.recipepage);
    }
  }; */

  return (
    <footer>
      <div className="socials">
        <div className="logo">
          <Link id="logolink" to="/">
            <FavoriteBorderIcon style={{ fontSize: 38 }} />
            Recipes
          </Link>
        </div>
      </div>
      <div className="footerimage">
        <img src="/assets/images/homefooter.png" alt="footerimage" />
        {image}
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
