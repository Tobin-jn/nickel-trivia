/* eslint-disable */

import { errorReducer } from "../errorReducer";

describe('errorReducer', () => {
  it('should return the initial state', () => {
    const expected = false
    
    const result = errorReducer(undefined, {})
    expect(result).toEqual(expected)
  })
})