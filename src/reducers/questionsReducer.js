export const questionsReducer = (state = {
    generalKnowledge: [],
    geography: [],
    history: [],
    animals: [],
    vehicles: [],
    cartoons: []
  }, action) => {
  switch (action.type) {
    case "UPDATE_QUESTIONS":
      state[action.category] = action.questions.filter( question => !question.asked)
      return state

    default:
      return state
  }
}