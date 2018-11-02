import { combineReducers } from "redux";
import { categoryReducer } from "./categoryReducer";
import { questionsReducer } from "./questionsReducer";
import { questionReducer } from "./questionReducer";

const rootReducer = combineReducers({
  category: categoryReducer,
  questions: questionsReducer,
  currentQuestion: questionReducer
});

export default rootReducer;