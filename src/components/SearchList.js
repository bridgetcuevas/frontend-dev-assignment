import React from "react";
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
              <div className="search-items">
                <div>{suggestion[textProperty]} </div>
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
