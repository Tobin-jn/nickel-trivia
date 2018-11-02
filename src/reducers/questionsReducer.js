export const questionsReducer = (state = {
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
    default:
      return state
  }
}


// export const categoryReducer = (state = '', action) => {
//   switch(action.type) {
//     case 'UPDATE_CATEGORY':
//       return action.category;
//     default:
//       return state;
//   }
// };