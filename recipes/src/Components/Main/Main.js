import React from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import Home from "./Home";
import Recipes from "./Recipes";
import About from "./About";
import Categorypage from "./Categorypage";
import RecipePage from "./RecipePage";
import Form from "../Header/Form";

import "./Main.css";

const Homepage = () => {
  return (
    <div>
      <Home />
    </div>
  );
};

const Aboutpage = () => {
  return (
    <div>
      <About />
    </div>
  );
};

const Nav = (props) => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            exact
            to="/"
            activeClassName="current"
            /*  onClick={props.homeclick}
            className={`${props.homeactive ? "current" : ""}`} */
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName="current"
            to="/recipes"
            /* onClick={props.recipesclick}
            className={`${props.recipesactive ? "current" : ""}`} */
          >
            Recipes
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName="current"
            to="/about"
            /* onClick={props.aboutclick}
            className={`${props.aboutactive ? "current" : ""}`} */
          >
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

const SideNav = ({
  sweetslink,
  saladslink,
  soupslink,
  beeflink,
  porklink,
  chickenlink,
  fishlink,
  veganlink,
}) => {
  return (
    <ul>
      <li>
        <img className="li-image" src="/assets/images/salad.png" alt="salad" />
        <NavLink to={`/${saladslink}`}>{saladslink}</NavLink>
        <img
          className="li-image-after"
          src="/assets/images/spoon.png"
          alt="spoon"
        />
      </li>
      <li>
        <img className="li-image" src="/assets/images/soup.png" alt="soup" />
        <NavLink to={`/${soupslink}`}>{soupslink}</NavLink>
      </li>
      <li>
        <NavLink to={`/${beeflink}`}>{beeflink}</NavLink>
        <img
          className="li-image-after"
          src="/assets/images/fork.png"
          alt="fork"
        />
      </li>
      <li>
        <img
          className="li-image"
          src="/assets/images/hot-meals.png"
          alt="hot-meals"
        />
        <NavLink to={`/${porklink}`}>{porklink}</NavLink>
      </li>
      <li>
        <NavLink to={`/${chickenlink}`}>{chickenlink}</NavLink>
        <img
          className="li-image-after"
          src="/assets/images/fork.png"
          alt="fork"
        />
      </li>
      <li>
        <NavLink to={`/${fishlink}`}>{fishlink}</NavLink>
      </li>
      <li>
        <img className="li-image" src="/assets/images/vegan.png" alt="vegan" />
        <NavLink to={`/${veganlink}`}>{veganlink}</NavLink>
        <img
          className="li-image-after"
          src="/assets/images/spoon.png"
          alt="spoon"
        />
      </li>
      <li>
        <img
          className="li-image"
          src="/assets/images/sweets.png"
          alt="sweets"
        />
        <NavLink to={`/${sweetslink}`}>{sweetslink}</NavLink>
      </li>
    </ul>
  );
};

const Main = () => {
  return (
    <main>
      <Switch>
        <Route path="/" exact component={Homepage}></Route>
        <Route path="/recipes/:id">
          <RecipePage />
        </Route>
        <Route path="/recipes">
          <Recipes />
        </Route>
        <Route path="/about" component={Aboutpage}></Route>
        <Route path="/sweets">
          <Categorypage />
        </Route>
        <Route path="/vegan">
          <Categorypage />
        </Route>
        <Route path="/fish">
          <Categorypage />
        </Route>
        <Route path="/chicken">
          <Categorypage />
        </Route>
        <Route path="/pork">
          <Categorypage />
        </Route>
        <Route path="/beef">
          <Categorypage />
        </Route>
        <Route path="/soups">
          <Categorypage />
        </Route>
        <Route path="/salads">
          <Categorypage />
        </Route>
        <Route path="/addrecipe">
          <Form />
        </Route>
      </Switch>
    </main>
  );
};

export default Main;
export { Nav };
export { SideNav };
