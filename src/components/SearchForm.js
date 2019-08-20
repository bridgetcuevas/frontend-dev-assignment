import React from "react";
import IosSearch from "../../node_modules/react-ionicons/lib/IosSearch";
import MdClose from "../../node_modules/react-ionicons/lib/MdClose";
import "../css/SearchForm.css";

const SearchForm = ({ value, onFocus, onChange, onMouseDown, onBlur }) => {
  return (
    <form action="" className="search-form">
      <div className="form-element">
        <input
          autoComplete="off"
          autoCapitalize="off"
          autoCorrect="off"
          spellCheck="off"
          type="search"
          name="query"
          className="search-input"
          placeholder="Zoeken"
          value={value}
          onChange={e => onChange(e.currentTarget.value)}
          onFocus={() => onFocus()}
          onBlur={() => onBlur()}
        />

        {value && (
          <button
            className="clear-button"
            type="button"
            onMouseDown={e => onMouseDown(e)}
          >
            <MdClose color="#777" fontSize="19px" />
          </button>
        )}
        <button className="search-button" type="button">
          <IosSearch color="#777" fontSize="19px" />
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
