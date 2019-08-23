import React, { Component } from "react";
import SearchFormContainer from "./components/SearchFormContainer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <SearchFormContainer />
      </div>
    );
  }
}

export default App;
