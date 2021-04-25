import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import Recipes from "./Recipes";
import About from "./About";
import Categorypage from "./Categorypage";
import "./Main.css";

const Homepage = () => {
  return (
    <div>
      <Home />
    </div>
  );
};

const Recipespage = () => {
  return (
    <div>
      <Recipes />
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

const Sweetspage = () => {
  return (
    <div>
      <Categorypage />
    </div>
  );
};

const Nav = (props) => {
  return (
    <nav>
      <ul>
        <li>
          <Link
            to="/"
            onClick={props.homeclick}
            className={`${props.homeactive ? "current" : ""}`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/recipes"
            onClick={props.recipesclick}
            className={`${props.recipesactive ? "current" : ""}`}
          >
            Recipes
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            onClick={props.aboutclick}
            className={`${props.aboutactive ? "current" : ""}`}
          >
            About
          </Link>
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
        <Link to={`/${saladslink}`}>{saladslink}</Link>
        <img
          className="li-image-after"
          src="/assets/images/spoon.png"
          alt="spoon"
        />
      </li>
      <li>
        <img className="li-image" src="/assets/images/soup.png" alt="soup" />
        <Link to={`/${soupslink}`}>{soupslink}</Link>
      </li>
      <li>
        <Link to={`/${beeflink}`}>{beeflink}</Link>
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
        <Link to={`/${porklink}`}>{porklink}</Link>
      </li>
      <li>
        <Link to={`/${chickenlink}`}>{chickenlink}</Link>
        <img
          className="li-image-after"
          src="/assets/images/fork.png"
          alt="fork"
        />
      </li>
      <li>
        <Link to={`/${fishlink}`}>{fishlink}</Link>
      </li>
      <li>
        <img className="li-image" src="/assets/images/vegan.png" alt="vegan" />
        <Link to={`/${veganlink}`}>{veganlink}</Link>
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
        <Link to={`/${sweetslink}`}>{sweetslink}</Link>
      </li>
    </ul>
  );
};

const Main = () => {
  return (
    <main>
      <Switch>
        <Route path="/" exact component={Homepage}></Route>
        <Route path="/recipes" component={Recipespage}></Route>
        <Route path="/about" component={Aboutpage}></Route>
        <Route path="/sweets" component={Sweetspage}></Route>
        <Route path="/vegan" component={Sweetspage}></Route>
        <Route path="/fish" component={Sweetspage}></Route>
        <Route path="/chicken" component={Sweetspage}></Route>
        <Route path="/pork" component={Sweetspage}></Route>
        <Route path="/beef" component={Sweetspage}></Route>
        <Route path="/soups" component={Sweetspage}></Route>
        <Route path="/salads" component={Sweetspage}></Route>
      </Switch>
    </main>
  );
};

export default Main;
export { Nav };
export { SideNav };
