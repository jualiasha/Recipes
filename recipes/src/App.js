import { BrowserRouter as Router } from "react-router-dom";
import { Component } from "react";
import "./App.css";

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Main from "./Components/Main/Main";
import Loading from "./Components/Main/Loading";

class App extends Component {
  state = {
    isLoading: false,
  };

  render() {
    return (
      <Router>
        <Header />
        {this.state.isLoading && <Loading />}
        <Main />
        <Footer />
      </Router>
    );
  }
}

export default App;
