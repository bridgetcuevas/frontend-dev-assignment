import React from "react";
import SearchForm from "../components/SearchForm";
import MdClose from "../../node_modules/react-ionicons/lib/MdClose";
import { shallow } from "enzyme";

describe("search form test suite", () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      value: "value",
      onFocus: jest.fn(() => "onFocus"),
      onChange: jest.fn(() => "onChange"),
      onMouseDown: jest.fn(() => "onMouseDown"),
      onBlur: jest.fn(() => "onBlur")
    };
    wrapper = shallow(<SearchForm {...props} />);
  });

  it("should render without crashing", () => {
    expect(wrapper).toBeDefined();
  });

  it("should render a form with class search-form", () => {
    expect(wrapper.find("form.search-form")).toHaveLength(1);
  });

  it("should render a div with class form-element", () => {
    expect(wrapper.find("div.form-element")).toHaveLength(1);
  });

  it("should render an input field with class search-input", () => {
    expect(wrapper.find("input.search-input")).toHaveLength(1);
  });

  it("should render a button with class clear-button if there is input value", () => {
    expect(wrapper.find("button.clear-button")).toHaveLength(1);
  });

  it("should render a button with class search-button", () => {
    expect(wrapper.find("button.search-button")).toHaveLength(1);
  });

  it("should render an icon with class md-close", () => {
    expect(wrapper.find("MdClose.md-close")).toHaveLength(1);
  });

  it("should render an icon with class ios-search", () => {
    expect(wrapper.find("IosSearch.ios-search")).toHaveLength(1);
  });

  it("should call onMouseDown when clear-button is selected", () => {
    const clearButton = wrapper.find("button.clear-button").first();
    expect(clearButton.prop("children")).toEqual(
      <MdClose className="md-close" color="#777" fontSize="19px" />
    );
    clearButton.simulate("mousedown");
    expect(props.onMouseDown).toHaveBeenCalled();
  });

  it("should call onFocus when form is selected", () => {
    const input = wrapper.find("input.search-input").first();
    input.simulate("focus");
    expect(props.onFocus).toHaveBeenCalled();
  });
});
