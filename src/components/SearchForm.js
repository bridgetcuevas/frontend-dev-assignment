import React from "react";
import PropTypes from "prop-types";
import IosSearch from "../../node_modules/react-ionicons/lib/IosSearch";
import MdClose from "../../node_modules/react-ionicons/lib/MdClose";
import "../css/SearchForm.css";

const SearchForm = ({
  value,
  onFocus,
  onBlur,
  onChange,
  onMouseDown,
  onKeyUp
}) => {
  return (
    <form
      className="search-form"
      onFocus={() => onFocus()}
      onBlur={() => onBlur()}
    >
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
          onKeyUp={e => onKeyUp(e.currentTarget.value)}
        />

        {value && value.length && (
          <button
            type="button"
            className="clear-button"
            onMouseDown={e => onMouseDown(e)}
          >
            <MdClose color="#777" fontSize="19px" />
          </button>
        )}
        <button type="button" className="search-button">
          <IosSearch color="#777" fontSize="19px" />
        </button>
      </div>
    </form>
  );
};

SearchForm.propTypes = {
  value: PropTypes.string.isRequired,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onMouseDown: PropTypes.func,
  onKeyUp: PropTypes.func
};

export default SearchForm;
