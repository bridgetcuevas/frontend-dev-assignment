import React, { Component } from "react";
import SearchForm from "./searchForm";

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
  }

  handleClear() {
    this.setState({
      searchQuery: ""
    });
  } 

  render() {
    return (
      <SearchForm
        value={this.state.searchQuery}
        onChange={this.handleSearch}
        onFocus={this.handleFocus.bind(this)}
        onBlur={this.handleBlur.bind(this)}
        onClear={this.handleClear.bind(this)}
      />
    );
  }
}

export default SearchFormContainer;
