import * as category from './helper';
import { cleanQuestions } from './helper';

export const getQuestions =  async (currentCategory) => {
  let amount = category[currentCategory].amount
  let categoryId =  category[currentCategory].category

  let url = `https://opentdb.com/api.php?amount=${amount}&category=${categoryId}&difficulty=easy&type=multiple`

  try {
    const response = await fetch(url)
    const data = await response.json()
    return category.cleanQuestions(data)
  } catch(error) {
    return 'No questions'
  }
}