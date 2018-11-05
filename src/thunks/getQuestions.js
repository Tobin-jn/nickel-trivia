import { isLoading, hasErrored, updateQuestions } from '../actions'
import * as category from '../apiCalls/helper';
import { cleanQuestions } from '../apiCalls/helper';

export const fetchQuestions = (category, url) => {
  return async (dispatch) => {
    try{
      dispatch(isLoading(true))
      const response = await fetch(url)
      if(!response.ok) {
        throw Error(response.statusText)
      }
      dispatch(isLoading(false))
      const data = await response.json()
      const questions = category.cleanQuestions(data)
      dispatch(updateQuestions(category, questions))
      } catch (error) {
        dispatch(hasErrored(true))
    }
  }
}
