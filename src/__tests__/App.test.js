import React from "react";
import { shallow } from 'enzyme';
import App from "./../App";

describe('app test suite', () => {

  it('renders without crashing', () => {
     shallow(<App />);
   });
   
});
