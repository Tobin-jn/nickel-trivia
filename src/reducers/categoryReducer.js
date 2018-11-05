export const categoryReducer = (state = '', action) => {
  switch(action.type) {
    case 'UPDATE_CATEGORY':
      return action.category;
    case "CLEAR_CATEGORY":
      state.category = ''
      return state.category
    default:
      return state;
  }
};

