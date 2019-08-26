import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { configure, mount } from "enzyme";
import SearchFormContainer from "../components/SearchFormContainer";

configure({ adapter: new Adapter() });

let instance;
let props;
let wrapper;

describe("search form container test suite", () => {
  beforeEach(done => {
    wrapper = mount(<SearchFormContainer {...props} />);
    instance = wrapper.instance();
    done();
  });

  afterEach(done => {
    wrapper.unmount();
    instance = null;
    done();
  });

  it("renders without crashing", () => {
    expect(wrapper).toBeDefined();
  });

  it("should mount component and request for suggestions by a trui query", async () => {
    await instance.getSuggestions("trui");
    const suggestions = instance.state.suggestions;
    expect(suggestions.length).toBe(11);
  });

  it("should mount component then search and filter query of tr/ 0 results should render", async () => {
    await instance.getSuggestions("tr");
    const filteredSuggestions = instance.state.filteredSuggestions;
    expect(filteredSuggestions.length).toBe(0);
  });

  it("should mount component then search and filter query of trui/ results should render a max of four suggestions", async () => {
    await instance.handleSearch("trui");
    const filteredSuggestions = instance.state.filteredSuggestions;
    expect(filteredSuggestions.length).toBe(4);
  });

  it("should mount component and onFocus set state active to be true", async () => {
    await instance.handleFocus();
    const focus = instance.state.active;
    expect(focus).toBe(true);
  });

  it("should mount component and onBlur set state active to be false", async () => {
    await instance.handleBlur();
    const blur = instance.state.active;
    expect(blur).toBe(false);
  });

  it("should mount component and onChange set state userInput to match", async () => {
    await instance.handleChange("sweater");
    const change = instance.state.userInput;
    expect(change).toBe("sweater");
  });

  // it("should mount component and onClear set state userInput to be an empty string", async () => {
  //   await instance.handleClear("calvin");
  //   const clear = instance.state.userInput;
  //   expect(clear).toBe("");
  // });
});
