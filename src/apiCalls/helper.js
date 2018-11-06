export const categories = {
  generalKnowledge: { amount: 50, category: 9},
  geography: { amount: 50, category: 22},
  history: { amount: 40, category: 23},
  cartoons: { amount: 18, category: 32 },
  animals: { amount: 9, category: 27},
  vehicles: { amount: 17, category: 28}
}


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

export const generateQuestion = (category, questions) => {
  const length = questions.length
  const randomInt = Math.round(Math.random() * (length - 0));
  return questions[randomInt]
}
