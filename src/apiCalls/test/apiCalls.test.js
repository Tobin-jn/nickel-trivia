/* eslint-disable */

import React from "react";
import { getQuestions } from "../apiCalls";
import * as category from '../helper';
import * as Mocks from "./mocks";

describe('getQuestions', () => {
  const mockCategory = 'geography'

  beforeEach(() => {
    category.cleanQuestions = jest.fn().mockImplementation(() => Mocks.mockCleaned)

    window.fetch = jest.fn()
      .mockImplementation(() =>
        Promise.resolve({
          status: 200,
          ok: true,
          json: () => Promise.resolve(Mocks.mockResults.results)
      })
    );
  })

  it('should call fetch with the correct url', () => {
    const mockAmount = 50
    const mockCategoryId = 22
    const expected =
      `https://opentdb.com/api.php?amount=${mockAmount}&category=${mockCategoryId}&difficulty=easy&type=multiple`;

    getQuestions(mockCategory)
    expect(window.fetch).toHaveBeenCalledWith(expected);
  })

  it('should call cleanQuestions if response is ok', async () => {

    const result = await getQuestions(mockCategory)

    expect(category.cleanQuestions).toHaveBeenCalledWith(Mocks.mockResults.results)
  })  

  it('should return questions if the fetch is successful', async () => {
    const expected = Mocks.mockCleaned

    const result = await getQuestions(mockCategory)

    expect(result).toEqual(expected)
  })

  it('should throw an error if the response status is not OK', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false,
      code: 500
    }))

    const expected = Error('Status was not ok: Code 500') 

    await expect(getQuestions(mockCategory)).rejects.toEqual(expected)
  })
})
