import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import Recipes from "./Recipes";
import About from "./About";
import Sweetslist from "./Sweet_page";
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
      <Sweetslist />
    </div>
  );
};

const Nav = (props) => {
  /*  const home = <Link to="/"></Link>;
  console.log(home.props.to);
  console.log(window.location.href);

  const recipe = <Link to="/recipes"></Link>; */
  return (
    <nav>
      <ul>
        <li>
          {/*  {home.props.to === window.location.href ? (
            <Link to="/" className="current">
              Home
            </Link>
          ) : (
            <Link to="/">Home</Link>
          )} */}
          <Link to="/" className={` ${props.current ? "current" : ""}`}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/recipes" className={` ${props.current ? "current" : ""}`}>
            Recipes
          </Link>
        </li>
        <li>
          <Link to="/about" className={` ${props.current ? "current" : ""}`}>
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

const SideNav = () => {
  return (
    <ul>
      <li>
        <img className="li-image" src="/assets/images/salad.png" alt="salad" />
        <Link to="/recipes/salads">Salads</Link>
        <img
          className="li-image-after"
          src="/assets/images/spoon.png"
          alt="spoon"
        />
      </li>
      <li>
        <img className="li-image" src="/assets/images/soup.png" alt="soup" />
        <Link to="/recipes/soups">Soups</Link>
      </li>
      <li>
        <Link to="/recipes/beef">Beef</Link>
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
        <Link to="/recipes/pork">Pork</Link>
      </li>
      <li>
        <Link to="/recipes/chicken">Chicken</Link>
        <img
          className="li-image-after"
          src="/assets/images/fork.png"
          alt="fork"
        />
      </li>
      <li>
        <Link to="/recipes/fish">Fish</Link>
      </li>
      <li>
        <img className="li-image" src="/assets/images/vegan.png" alt="vegan" />
        <Link to="/recipes/vegan">Vegan</Link>
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
        <Link to="/sweets">Sweets</Link>
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
      </Switch>
    </main>
  );
};

export default Main;
export { Nav };
export { SideNav };
