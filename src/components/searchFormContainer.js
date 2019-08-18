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

  handleBlur() {
    this.setState({
      active: false
    });
  }

  render() {
    return (
      <SearchForm
        onFocus={this.handleFocus.bind(this)}
        onBlur={this.handleBlur.bind(this)}
      />
    );
  }
}

export default SearchFormContainer;
