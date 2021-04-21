import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import Recipes from "./Recipes";
import About from "./About";
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

const Nav = (props) => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/" className={` ${props.current ? "current" : ""}`}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/recipes">Recipes</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

const Main = () => {
  return (
    <main>
      <Switch>
        <Route path="/" exact component={Homepage}></Route>
        <Route path="/recipes" component={Recipespage}></Route>
        <Route path="/about" component={Aboutpage}></Route>
      </Switch>
    </main>
  );
};

export default Main;
export { Nav };
