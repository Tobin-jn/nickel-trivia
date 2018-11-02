/* eslint-disable */

import React from "react";
import { shallow } from "enzyme";
import App from '../App';

describe("App", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it("should exist", () => {
    expect(wrapper).toBeDefined();
  });

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});

// describe('mapStateToProps', () => {
//   it("should return a props object", () => {

//   })
// })

// describe('mapDispatchToProps', () => {
//   it('should call dispatch with...', () => {

//   })
// })
