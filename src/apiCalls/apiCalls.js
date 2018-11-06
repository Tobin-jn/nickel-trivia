// import * as category from './helper';
import { cleanQuestions, categories } from './helper';

export const getQuestions =  async (currentCategory) => {
  let amount = categories[currentCategory].amount
  let categoryId =  categories[currentCategory].category
  let url = `https://opentdb.com/api.php?amount=${amount}&category=${categoryId}&difficulty=easy&type=multiple`

  const response = await fetch(url)
  if(!response.ok) throw new Error(`Status was not ok: Code ${response.code}`)
  const data = await response.json()
  return cleanQuestions(data)
}
