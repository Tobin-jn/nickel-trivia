export const questionsReducer = (state = {
    generalKnowledge: [],
    geography: [],
    history: [],
    animals: [],
    vehicles: [],
    cartoons: [],
  }, action) => {
  switch (action.type) {
    case "UPDATE_QUESTIONS":
      // state[action.category] = action.questions
      state[action.category] = action.questions.filter( question => !question.asked)
      return state

    // case 'UPDATE_CURRENT_QUESTION':
    //   // action.question.asked = true
    //   state.currentQuestion = { question: action.question }
    //   return state 

    case "TOGGLE_ASKED":
      const updatedCategory = state[action.category].map( question => {
        if(question.id === action.question.id) {
          question.asked = true
          return question
        } else {
          return question
        }
      })
      state[action.category] = updatedCategory
      return state

    default:
      return state
  }
}


