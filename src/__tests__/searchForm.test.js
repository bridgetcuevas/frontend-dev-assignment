import React from "react";
import SearchForm from "../components/SearchForm";
import { mount } from "enzyme";

describe("search form test suite", () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      value: "value",
      onFocus: jest.fn(() => "onFocus"),
      onBlur: jest.fn(() => "onBlur"),
      onKeyUp: jest.fn(() => "onKeyUp"),
      onChange: jest.fn(() => "onChange"),
      onMouseDown: jest.fn(() => "onMouseDown")
    };
    wrapper = mount(<SearchForm {...props} />);
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
    expect(wrapper.find("MdClose")).toHaveLength(1);
  });

  it("should render an icon with class ios-search", () => {
    expect(wrapper.find("IosSearch")).toHaveLength(1);
  });

  it("should call onFocus when input is selected followed by onBlur ", () => {
    wrapper.find("input.search-input").simulate("focus");
    expect(props.onFocus).toHaveBeenCalled();

    wrapper.find("input.search-input").simulate("blur");
    expect(props.onBlur).toHaveBeenCalled();
  });

  it("should call onChange when input is selected", () => {
    wrapper.find("input.search-input").simulate("change");
    expect(props.onChange).toHaveBeenCalled();
  });

  it("should call onKeyUp when input is selected", () => {
    wrapper.find("input.search-input").simulate("keyup");
    expect(props.onKeyUp).toHaveBeenCalled();
  });

  it("should call onMouseDown when clear-button is selected", () => {
    wrapper.find("button.clear-button").simulate("mousedown");
    expect(props.onMouseDown).toHaveBeenCalled();
  });
});
