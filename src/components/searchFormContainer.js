import React, { Component } from "react";
import SearchForm from "./searchForm";

class SearchFormContainer extends Component {
  state = {
    active: false
  };

  handleFocus() {
    this.setState({
      active: true
    });
  }

  render() {
    return <SearchForm onFocus={this.handleFocus.bind(this)} />;
  }
}

export default SearchFormContainer;
