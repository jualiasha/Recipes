import React, { useState } from "react";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";
import { Link } from "react-router-dom";
import { Nav } from "../Main/Main";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import MobileMenu from "./MobileMenu";

import "./Header.css";

const Header = () => {
  const [mobMenu, setmobMenu] = useState(false);

  const mobilemenuHandlerShow = () => {
    setmobMenu(!mobMenu);
  };

  return (
    <header>
      <div className="container">
        <div className="navigation">
          <div className="logo">
            <Link id="logolink" to="/">
              <FavoriteBorderIcon style={{ fontSize: 38 }} />
              Recipes
            </Link>
          </div>
          <nav>
            <Nav />
          </nav>
          <Link id="button" to="/addrecipe" role="button">
            Add recipe
          </Link>
          <MenuOpenIcon
            id="mobileicon"
            style={{ fontSize: 50 }}
            onClick={mobilemenuHandlerShow}
          ></MenuOpenIcon>
          {mobMenu ? <MobileMenu /> : null}
        </div>
      </div>
    </header>
  );
};

export default Header;
