export const updateCategory = category => ({
  type: "UPDATE_CATEGORY",
  category
})

export const updateQuestions = (category, questions) => ({
  type: "UPDATE_QUESTIONS",
  category,
  questions
})
