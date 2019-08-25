import React from "react";
import { mount } from "enzyme";
import SearchList from "../components/SearchList";

describe("First React component test with Enzyme", () => {
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

  // it("should render a li search-li", () => {
  //   expect(wrapper.find("li.search-li")).toHaveLength(1);
  // });
});
