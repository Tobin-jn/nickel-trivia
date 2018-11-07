export const updateCategory = category => ({
  type: "UPDATE_CATEGORY",
  category
})

export const updateQuestions = (category, questions) => ({
  type: "UPDATE_QUESTIONS",
  category,
  questions
})

export const toggleAsked = (category, question) => ({
  type: "TOGGLE_ASKED",
  category,
  question
})

export const updateCurrentQuestion = (question) => ({
  type: "UPDATE_CURRENT_QUESTION",
  question
})

export const addQuestionCount = () => ({
  type: "ADD_QUESTION_COUNT",
})

export const addPoints = () => ({
  type: "ADD_POINTS",
})
  
export const hasErrored = (bool) => ({
   type: 'HAS_ERRORED',
   hasErrored: bool
})
