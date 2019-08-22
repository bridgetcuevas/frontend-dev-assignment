import React, { Component } from "react";
import bijenkorfTruien from "../services/bijenkorfTruien";
import SearchForm from "./SearchForm";

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

  componentDidMount() {
    this.getSuggestions();
  }

  async filterSuggestions(userInput) {
    const regexLiteral = `(${userInput})(?![^<]*>|[^<>]*</)`;
    const regexConstructor = new RegExp(regexLiteral, "i");
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
