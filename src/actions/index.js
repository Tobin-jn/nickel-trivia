export const updateCategory = category => ({
  type: "UPDATE_CATEGORY",
  category
})

export const updateQuestions = (category, questions) => ({
  type: "UPDATE_QUESTIONS",
  category,
  questions
})

export const clearCategory = () => ({
  type: "CLEAR_CATEGORY",
})

export const updateCurrentQuestion = (question) => ({
  type: "UPDATE_CURRENT_QUESTION",
  question
})

export const clearCurrentQuestion = () => ({
  type: "CLEAR_CURRENT_QUESTION",
}) 

export const addQuestionCount = () => ({
  type: "ADD_QUESTION_COUNT",
})
