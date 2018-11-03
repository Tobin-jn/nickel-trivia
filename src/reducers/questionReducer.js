export const questionReducer = (state = {
    answers: [ 'a', 'b', 'c', 'd'],
    question: 'question',
    category:'General Knowledge'
  }, action) => {
  switch(action.type) {
    case "UPDATE_CURRENT_QUESTION":
      return { ...action.question, asked: true }
    default:
      return state
  }
}
