import React from "react";
import { storiesOf } from "@storybook/react";
import { action, actions } from "@storybook/addon-actions";
import App from "../App";
import SearchForm from "../components/SearchForm";
import SearchList from "../components/SearchList";

storiesOf("App", module).add("default", () => <App />);

storiesOf("SearchForm", module)
  .add("default", () => <SearchForm />)
  .add("on focus", () => <SearchForm onFocus={action("focus")} />)
  .add("on blur", () => (
    <SearchForm onChange={action("onChange")} onBlur={action("blur")} />
  ))
  .add("with input", () => <SearchForm value="trui" />)
  .add("with no input", () => <SearchForm value="" />)
  .add("onChange ", () => <SearchForm onChange={action("change")} />)
  .add("onMouseDown", () => (
    <SearchForm value="trui" onMouseDown={action("mousedown")} />
  ))
  .add("onKeyUp ", () => <SearchForm onKeyUp={action("keyup")} />);

storiesOf("SearchList", module)
  .add("default", () => <SearchForm />)
  .add("with value and filtered Suggestions", () => (
    <SearchList
      value={"trui"}
      filteredSuggestions={[
        {
          searchterm: "heren truien",
          nrResults: 1100
        },
        {
          searchterm: "dames truien",
          nrResults: 1501
        },
        {
          searchterm: "kenzo trui",
          nrResults: 62
        },
        {
          searchterm: "kenzo trui dames",
          nrResults: 21
        },
        {
          searchterm: "kenzo trui heren",
          nrResults: 12
        },
        {
          searchterm: "armani truien",
          nrResults: 39
        },
        {
          searchterm: "daily paper trui",
          nrResults: 2
        },
        {
          searchterm: "calvin klein trui",
          nrResults: 54
        },
        {
          searchterm: "calvin klein trui heren rood",
          nrResults: 40
        },
        {
          searchterm: "calvin klein trui heren blauw",
          nrResults: 50
        },
        {
          searchterm: "calvin klein trui heren oranje",
          nrResults: 42
        }
      ]}
    />
  ));
