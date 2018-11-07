/* eslint-disable */

import { errorReducer } from "../errorReducer";
import { mockState } from './mocks';

describe('errorReducer', () => {
  it('should return the initial state', () => {
    const expected = false
    
    const result = errorReducer(undefined, {})
    expect(result).toEqual(expected)
  })

  it('should return state with an updated boolean value', () => {
    const action = {
      type: "HAS_ERRORED",
      hasErrored: true
    };    

    const expected = true

    const result = errorReducer(mockState, action)
    expect(result).toEqual(expected)
  })
})