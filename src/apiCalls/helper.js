export const generalKnowledge = { amount: 50, category: 9}
  
export const geography = { amount: 50, category: 22}

export const history = { amount: 40, category: 23}
  
export const cartoons = { amount: 18, category: 32 }

export const animals = { amount: 9, category: 27}

export const vehicles = { amount: 17, category: 28}


const shuffleAnswers = (questionChoices) => {
  let counter = questionChoices.length;

  while (counter > 0) {
      let index = Math.floor(Math.random() * counter);
      counter--;

      let element = questionChoices[counter];
      questionChoices[counter] = questionChoices[index];
      questionChoices[index] = element;
  }

  return questionChoices;
}

export const cleanQuestions = (questions) => {
  let counter = 0
  return questions.results.map( question => {
    const answers = [...question.incorrect_answers, question.correct_answer]
    const shuffled = shuffleAnswers(answers)
    counter++
    return  {
      category: question.category,
      question: question.question,
      answers: shuffled,
      correct_answer: question.correct_answer,
      id: counter,
      asked: false,
    }
  })
}

// const addProperties = (array) => {
//   let counter = 1
//   const withId = data.results.map( question => {
//     let updatedQuestion = {...question, id: counter, asked: false}
//     counter++
//     return updatedQuestion
//   })
// return withId
// }


// general https://opentdb.com/api.php?amount=50&category=9&difficulty=easy&type=multiple      9     50
// geography https://opentdb.com/api.php?amount=50&category=22&difficulty=easy&type=multiple   22    50
// history https://opentdb.com/api.php?amount=40&category=23&difficulty=easy&type=multiple     23    40
// cartoons https://opentdb.com/api.php?amount=28&category=32&difficulty=easy&type=multiple    32    18
// animals https://opentdb.com/api.php?amount=9&category=27&difficulty=easy&type=multiple      27    9    
// vehicles https://opentdb.com/api.php?amount=17&category=28&difficulty=easy&type=multiple    26    17