import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import Recipes from "./Recipes";
import About from "./About";

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

const Nav = () => {
  return (
    <nav>
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
    </nav>
  );
};

const Main = () => {
  return (
    <div>
      <Nav />
      <Switch>
        <Route path="/" exact component={Homepage}></Route>
        <Route path="/recipes" component={Recipespage}></Route>
        <Route path="/about" component={Aboutpage}></Route>
      </Switch>
    </div>
  );
};

export default Main;
