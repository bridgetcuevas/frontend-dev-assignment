import React from "react";
import Highlighter from "react-highlight-words";
import "../css/SearchList.css";

const SearchList = ({
  suggestions,
  textProperty,
  valueProperty,
  filteredSuggestions,
  value
}) => {
  return (
    <div>
      {value.length > 2 && (
        <ul className="search-ul">
          {filteredSuggestions.map(suggestion => (
            <li
              key={suggestion[valueProperty]}
              className={suggestions ? "search-li active" : "search-li"}
            >
              <div className="search-terms">
                <Highlighter
                  highlightClassName="higlighted"
                  activeIndex={-1}
                  caseSensitive={false}
                  searchWords={[value]}
                  textToHighlight={suggestion[textProperty]}
                />
                <div className="nr-results"> ({suggestion[valueProperty]})</div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

SearchList.defaultProps = {
  textProperty: "searchterm",
  valueProperty: "nrResults"
};

export default SearchList;
