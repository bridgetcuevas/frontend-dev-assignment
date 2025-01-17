import React from "react";
import PropTypes from "prop-types";
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
      {value && value.length > 2 && (
        <ul className="search-ul">
          {filteredSuggestions &&
            filteredSuggestions.map(suggestion => (
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
  valueProperty: "nrResults"
};

SearchList.propTypes = {
  textProperty: PropTypes.string.isRequired,
  valueProperty: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};

export default SearchList;
