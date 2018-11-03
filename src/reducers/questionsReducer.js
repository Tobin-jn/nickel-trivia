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
      state[action.category] = action.questions
      return state

    default:
      return state
  }
}