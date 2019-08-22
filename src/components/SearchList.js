import React from "react";

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
        <ul className="list-group">
          {filteredSuggestions.map(suggestion => (
            <li
              key={suggestion[valueProperty]}
              className={
                suggestions
                  ? "list-group-suggestion active"
                  : "list-group-suggestion"
              }
            >
              {suggestion[textProperty]} ({suggestion[valueProperty]})
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
