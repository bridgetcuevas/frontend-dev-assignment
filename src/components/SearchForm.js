import React from "react";
import IosSearch from "../../node_modules/react-ionicons/lib/IosSearch";
import MdClose from "../../node_modules/react-ionicons/lib/MdClose";
import "../css/searchForm.css";

const SearchForm = ({ onFocus, onBlur }) => {
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
          onFocus={() => onFocus()}
          onBlur={() => onBlur()}
        />

        <button className="clear-button" type="reset">
          <MdClose color="#777" fontSize="21px" />
        </button>

        <button className="search-button" type="submit">
          <IosSearch color="#777" fontSize="17px" />
        </button>

      </div>
    </form>
  );
};

export default SearchForm;
