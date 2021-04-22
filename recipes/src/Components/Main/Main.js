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
