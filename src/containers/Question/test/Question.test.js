import React from 'react'
import { shallow } from 'enzyme'

describe('Question', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Question />)
  })
  
  it('should exist', () => {
    expect(wrapper).toBeDefined()
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})