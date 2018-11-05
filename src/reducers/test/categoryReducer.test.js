/* eslint-disable */

import { categoryReducer } from "../categoryReducer";
import { mockState } from './mocks';


describe('categoryReducer', () => {
  it('should return the initial state', () => {
    const expected = ''

    const result = categoryReducer(undefined, {})

    expect(result).toEqual(expected)
  })
  it('should return state with an update category', () => {
    const action = {
      type: "UPDATE_CATEGORY",
      category: 'Geography'
    };    

    const expected = 'Geography'

    const result = categoryReducer(mockState, action)

    expect(result).toEqual(expected)
  })
  it('should return a cleared out category state', () => {
    const action = {
      type: 'CLEAR_CATEGORY',
    }

    const expected = ''

    const result = categoryReducer(mockState, action)

    expect(result).toEqual(expected)
  })
})




