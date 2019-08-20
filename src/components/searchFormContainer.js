import React, { Component } from "react";
import SearchForm from "./SearchForm";

class SearchFormContainer extends Component {
  state = {
    active: false,
    searchQuery: ""
  };

  handleFocus() {
    console.log("focus");
    this.setState({
      active: true
    });
  }

  handleBlur() {
    console.log("blur");
    this.setState({
      active: false,
      searchQuery: ""
    });
  }

  handleSearch = query => {
    console.log("query");
    this.setState({
      searchQuery: query
    });
  };

  handleClear = e => {
    console.log("clear");
    e.preventDefault();
    this.setState({
      searchQuery: ""
    });
  };

  render() {
    return (
      <SearchForm
        value={this.state.searchQuery}
        onChange={this.handleSearch}
        onFocus={this.handleFocus.bind(this)}
        onBlur={this.handleBlur.bind(this)}
        onMouseDown={this.handleClear.bind(this)}
      />
    );
  }
}

export default SearchFormContainer;
