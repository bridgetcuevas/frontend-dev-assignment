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

  componentDidMount() {
    this.getSuggestions();
  }

  async filterSuggestions(userInput) {
    const regexLiteral = `(${userInput})(?![^<]*>|[^<>]*</)`;
    const regexConstructor = new RegExp(regexLiteral, "i");

    return await this.state.suggestions
      .map(suggestion => {
        return {
          match: suggestion.searchterm.match(regexConstructor),
          suggestion: suggestion
        };
      })
      .filter(suggestion => suggestion.match !== null)
      .map(matchedSuggestion => {
        return {
          startIndex: matchedSuggestion.match.index,
          endIndex: matchedSuggestion.match.index + userInput.length,
          searchterm: matchedSuggestion.match.input,
          nrResults: matchedSuggestion.suggestion.nrResults
        };
      });
  }

  handleSearch = async userInput => {
    if (userInput && userInput.length > 2) {
      this.setState({
        filteredSuggestions: await this.filterSuggestions(userInput)
      });
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
      <div className="form-container">
        <SearchForm
          className="search-form"
          value={this.state.userInput}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          onChange={this.handleChange}
          onMouseDown={this.handleClear}
          onKeyUp={this.handleSearch}
        />

        <SearchList
          className="search-list"
          value={this.state.userInput}
          suggestions={this.state.suggestions}
          filteredSuggestions={this.state.filteredSuggestions}
        />
      </div>
    );
  }
}

export default SearchFormContainer;
