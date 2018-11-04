export const questionsReducer = (state = {
    generalKnowledge: [],
    geography: [],
    history: [],
    animals: [],
    vehicles: [],
    cartoons: [],
    currentQuestion: {}
  }, action) => {
  switch (action.type) {
    case "UPDATE_QUESTIONS":
      state[action.category] = action.questions.filter( question => !question.asked)
      return state
    case 'UPDATE_CURRENT_QUESTION':
      const findCurrent = state[action.category].filter( question => action.question.id === question.id )
      return state.currentQuestion = { ...findCurrent, asked: true }
    case "TOGGLE_ASKED":
      return state[action.category].map( question => {
        return question.id === action.question.id
          ? {...question, asked: !question.asked }
          : question
      })
    default:
      return state
  }
}


