import React from "react";
import { mount } from "enzyme";
import SearchList from "../components/SearchList";

describe("search list test suite", () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      value: "value"
    };
    wrapper = mount(<SearchList {...props} />);
  });

  it("should render without crashing", () => {
    expect(wrapper).toBeDefined();
  });

  it("should render a ul search-ul", () => {
    expect(wrapper.find("ul.search-ul")).toHaveLength(1);
  });
});
