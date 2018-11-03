export const gameReducer = (state = {
  questionCount: 0,
  score: 0
}, action) => {
  switch(action.type){
    case 'ADD_QUESTION_COUNT':
      return {questionCount: state.questionCount += 1, score: state.score}
    default:
      return state
  }
}