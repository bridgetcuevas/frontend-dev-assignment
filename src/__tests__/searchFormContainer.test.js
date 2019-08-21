import React from "react";
import SearchFormContainer from "../components/SearchFormContainer";

import { mount } from "enzyme";

describe("search form container test suite ", () => {

  it("should render form and search for sweater", () => {
    const searchForm = mount(<SearchFormContainer />);
    const input = searchForm.find("input");

    expect(input).toHaveLength(1);
    expect(input.prop("type")).toEqual("search");
  });
});
