import { BrowserRouter as Router } from "react-router-dom";
import { Component } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Main from "./Components/Main/Main";

class App extends Component {
  state = {
    isLoading: false,
    searchinput: "",
  };

  SearchValueHandler = (event) => {
    this.setState({ searchInput: event.target.value });
    console.log(this.state.searchInput);
  };

  render() {
    return (
      <Router>
        <Header />
        <Main />
        <Footer />
      </Router>
    );
  }
}

export default App;
