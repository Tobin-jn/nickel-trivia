export const categories = {
  generalKnowledge: { amount: 50, category: 9},
  geography: { amount: 50, category: 22},
  history: { amount: 40, category: 23},
  cartoons: { amount: 18, category: 32 },
  animals: { amount: 9, category: 27},
  vehicles: { amount: 17, category: 28}
}


export const shuffleAnswers = (questionChoices) => {
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
    const cleanedShuffled = cleanAnswers(shuffled)
    const cleanedQuestion = cleanQuestion(question.question)
    counter++
    return  {
      category: question.category,
      question: cleanedQuestion,
      answers: cleanedShuffled,
      correct_answer: question.correct_answer,
      id: counter,
      asked: false,
    }
  })
}

export const cleanAnswers = (answers) => {
  return answers.map( answer => {
    return answer.replace(/&quot;/g,'"')
            .replace(/&#039;/g,"'")
            .replace(/&amp;/g, '&')
            .replace(/&aldquo;/g, '"')
            .replace(/&ardquo;/g, '"')
            .replace(/&hellip;/g, '...')
            .replace(/&hellip;/g, "'")
            .replace(/&shy;/g, "-")
  })
}

export const cleanQuestion = (question) => {
  return question.replace(/&quot;/g,'"')
          .replace(/&#039;/g,"'")
          .replace(/&amp;/g, '&')
          .replace(/&aldquo;/g, '"')
          .replace(/&ardquo;/g, '"')
          .replace(/&hellip;/g, '...')
          .replace(/&hellip;/g, "'")
          .replace(/&shy;/g, "-")
}

export const generateQuestion = (category, questions) => {
  const length = questions.length
  const randomInt = Math.round(Math.random() * (length - 0));
  return questions[randomInt]
}
