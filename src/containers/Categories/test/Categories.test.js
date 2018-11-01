/* eslint-disable */

import React from "react";
import { shallow } from "enzyme";
import { Categories, mapStateToProps, mapDispatchToProps } from "../index";

describe("Categories", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Categories />);
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