import React, { Component } from "react";
import SearchForm from "./SearchForm";

class SearchFormContainer extends Component {
  state = {
    active: false,
    searchQuery: ""
  };

  handleFocus() {
    this.setState({
      active: true
    });
  }

  handleBlur() {
    this.setState({
      active: false,
      searchQuery: ""
    });
  }

  handleSearch = query => {
    this.setState({
      searchQuery: query
    });
  };

  handleClear = e => {
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
