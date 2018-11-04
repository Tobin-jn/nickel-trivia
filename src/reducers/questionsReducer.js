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

    // case 'UPDATE_CURRENT_QUESTION':
    //   // action.question.asked = true
    //   state.currentQuestion = { question: action.question }
    //   return state 

    case "TOGGLE_ASKED":
      const updatedCategory = state[action.category].map( question => {
        return question.id === action.question.id
          ? {...question, asked: !question.asked }
          : question
      })
      state[action.category] = updatedCategory
      return state

    default:
      return state
  }
}


