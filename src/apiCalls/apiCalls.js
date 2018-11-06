// import * as category from './helper';
import { cleanQuestions, categories } from './helper';

export const getQuestions =  async (currentCategory) => {
  let amount = categories[currentCategory].amount
  let categoryId =  categories[currentCategory].category
  let url = `https://opentdb.com/api.php?amount=${amount}&category=${categoryId}&difficulty=easy&type=multiple`

  // try {
    const response = await fetch(url)
    const data = await response.json()
    return cleanQuestions(data)

  // } catch(error) {
  //   return 'Status error'
  // }
}