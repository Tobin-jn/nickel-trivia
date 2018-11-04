/* eslint-disable */

import { categoryReducer } from "../categoryReducer";


describe('categoryReducer', () => {
  it('should return the initial state', () => {
    const expected = ''

    const result = categoryReducer(undefined, {})

    expect(result).toEqual(expected)
  })
})


// it('should return state with a new todo', () => {
// })

// it('should toggle the completed status of a new todo', () => {
// })