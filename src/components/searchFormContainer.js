import React, { Component } from "react";
import axios from "axios";
import SearchForm from "./SearchForm";

class SearchFormContainer extends Component {
  state = {
    active: false,
    suggestions: [],
    filteredSuggestions: [],
    userInput: ""
  };

  getSuggestions = async (userInput) => {
    let uri = `http://localhost:3000/search`;
    if (userInput) {
      uri = `?search=${userInput}`;
    }
    const response = await axios.get(uri, {
      params: { search: userInput }
    });
    this.setState({ suggestions: response.data.suggestions });
  }

  componentDidMount() {
    this.getSuggestions();
  }

  filterSuggestions = async (userInput) => {

    const regexLiteral = `(${userInput})(?![^<]*>|[^<>]*</)`;
    const regexConstructor = new RegExp(regexLiteral, "ig");    
    const suggestionSearchTerms = this.state.suggestions.map(
      suggestion => suggestion.searchterm
    );
    return await suggestionSearchTerms
      .map(suggestionSearchTerm => {
        return suggestionSearchTerm.match(regexConstructor);
      })
      .filter(filteredSuggestion => filteredSuggestion !== null)
      .map(filteredSuggestion => {
        return {
          startIndex: filteredSuggestion.index,
          endIndex: filteredSuggestion.index + userInput.length,
          input: filteredSuggestion.input
        };
      });
  }

  handleSearch = async userInput => {
    if (userInput && userInput.length > 2) {

      this.setState({
        filteredSuggestions: await this.filterSuggestions(userInput)
      });
      console.log("SUGGESTIONS", this.state.filteredSuggestions);
    }
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

  handleClear = e => {
    e.preventDefault();
    this.setState({
      userInput: ""
    });
  };

  render() {
    return (
      <div>
        <SearchForm
          value={this.state.userInput}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          onChange={this.handleChange}
          onMouseDown={this.handleClear}
          onKeyUp={this.handleSearch}
        />
      </div>
    );
  }
}

export default SearchFormContainer;
