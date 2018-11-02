import * as category from './helper';
import { cleanQuestions } from './helper';

export const getQuestions =  async (currentCategory) => {

  let url = `https://opentdb.com/api.php?amount=${category.currentCategory.amount}&category=${category.currentCategory.category}&difficulty=easy&type=multiple`

  const response = await fetch(url)
  const data = await response.json()
  return cleanQuestions(data)
}