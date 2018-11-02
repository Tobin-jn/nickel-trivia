export const questionReducer = (state = {}, action) => {
  switch(action.type) {
    case "UPDATE_CURRENT_QUESTION":
      return { ...action.question, asked: true }
    default:
      return state
  }
}
