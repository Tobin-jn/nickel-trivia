export const questionReducer = (state = {
    answers: [ '', '', '', ''],
    question: 'question',
    category:'General Knowledge'
  }, action) => {
  switch(action.type) {
    case "UPDATE_CURRENT_QUESTION":
      return { ...action.question, asked: true }
    // case 'CLEAR_CURRENT_QUESTION':
    //   state.currentQuestion = {
    //     answers: [ '', '', '', ''],
    //     question: 'question',
    //     category:'General Knowledge'
    //   }
    //   return state
    default:
      return state
  }
}
