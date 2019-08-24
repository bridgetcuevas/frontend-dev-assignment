import React, { Component } from "react";
import bijenkorfTruien from "../services/bijenkorfTruien";
import SearchForm from "./SearchForm";
import SearchList from "./SearchList";

class SearchFormContainer extends Component {
  state = {
    active: false,
    suggestions: [],
    filteredSuggestions: [],
    userInput: ""
  };

  getSuggestions = async userInput => {
    const response = await bijenkorfTruien.get("/search", {
      params: { search: userInput }
    });
    this.setState({ suggestions: response.data.suggestions });
  };

  handleFocus = () => {
    this.setState({
      active: true
    });
  };

  handleBlur = () => {
    this.setState({
      active: false,
      userInput: ""
    });
  };

  handleChange = userInput => {
    this.setState({
      userInput: userInput
    });
  };

  handleSearch = async userInput => {
    if (userInput && userInput.length > 2) {
      this.getSuggestions();
      this.setState({
        filteredSuggestions: this.state.suggestions
          .filter(suggestion => suggestion.searchterm.includes(userInput))
          .slice(0, 4)
      });
    }
  };

  handleClear = e => {
    e.preventDefault();
    this.setState({
      userInput: ""
    });
  };

  render() {
    const { userInput, suggestions, filteredSuggestions } = this.state;
    return (
      <div className="form-container">
        <SearchForm
          className="search-form"
          value={userInput}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          onChange={this.handleChange}
          onMouseDown={this.handleClear}
          onKeyUp={this.handleSearch}
        />

        <SearchList
          className="search-list"
          value={userInput}
          suggestions={suggestions}
          filteredSuggestions={filteredSuggestions}
        />
      </div>
    );
  }
}

export default SearchFormContainer;
