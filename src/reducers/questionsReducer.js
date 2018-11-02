export const questions = (state = {
    generalKnowledge: {},
    geography: {},
    history: {},
    animals: {},
    vehicles: {},
    cartoons: {}
  }, action) => {
  switch (action.type) {
    case "UPDATE_QUESTIONS":
      return state[action.category] = action.questions
    default
      return state
  }
}