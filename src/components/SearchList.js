import React from "react";
import Highlighter from "react-highlight-words";
import "../css/SearchList.css";

const SearchList = ({
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
            <li className="search-li" key={suggestion[valueProperty]}>
              <Highlighter
                highlightClassName="higlighted"
                activeIndex={-1}
                caseSensitive={false}
                searchWords={[value]}
                textToHighlight={suggestion[textProperty]}
              />
              <div className="nr-results"> ({suggestion[valueProperty]})</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

SearchList.defaultProps = {
  textProperty: "searchterm",
  valueProperty: "nrResults",
  value: "",
  filteredSuggestions:[]
};

export default SearchList;
