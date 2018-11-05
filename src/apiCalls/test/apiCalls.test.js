/* eslint-disable */

import React from "react";
import { getQuestions } from "../apiCalls";
import * as category from '../helper';

import * as Mocks from "./mocks";

describe('getQuestions', () => {
  beforeEach(() => {
    window.fetch = jest
      .fn()
      .mockImplementation(() =>
        Promise.resolve({
          status: 200,
          ok: true,
          json: () => Promise.resolve(Mocks.mockResults)
      })
    );
  })

  it('should call fetch with the correct data', () => {
    const mockCategory = 'geography'
    const mockAmount = 50
    const mockCategoryId = 22
    const expected =
      `https://opentdb.com/api.php?amount=${mockAmount}&category=${mockCategoryId}&difficulty=easy&type=multiple`;

    getQuestions(mockCategory)
    expect(window.fetch).toHaveBeenCalledWith(expected);
  })

  it('should call cleanQuestions if response is ok', async () => {
    const mockCategory = 'geography'
    // window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
    //   ok: true
    // }))

    category.cleanQuestions = jest.fn()
    const result = await getQuestions(mockCategory)

    expect(category.cleanQuestions).toHaveBeenCalledWith(result)
  })  

  it('should return an error if response is not ok', () => {
  })
})


// it('should dispatch isLoading(false) if the response is ok', async () => {
//   window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
//     ok: true
//   }))

//   const thunk = fetchStaff(mockUrl)

//   await thunk(mockDispatch)

//   expect(mockDispatch).toHaveBeenCalledWith(isLoading(false))
// })



// it('should return an error if response is not ok', async () => {
//   window.fetch = jest.fn().mockImplementation(() =>
//     Promise.resolve({
//       status: 500,
//       ok: false
//     })
//   );
//   const expected = new Error('Error - GitHub User Not Found');
//   await expect(fetchUserInfo('NonexistentUser')).rejects.toEqual(expected);
// });




// describe("fetch", () => {
//   it("should call fetch with the correct params", async () => {
//     window.fetch = jest
//       .fn()
//       .mockImplementation(() =>
//         Promise.resolve({ json: () => Promise.resolve(Mocks.mockResults) })
//       );
//     const expected =
//       "https://api.themoviedb.org/3/person/1223/movie_credits?api_key=9954e71d12ad27a2cefac26f2e808e76";

//     Fetch.fetchData();
//     expect(window.fetch).toHaveBeenCalledWith(expected);
//   });

