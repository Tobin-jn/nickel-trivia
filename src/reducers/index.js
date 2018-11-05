import { combineReducers } from "redux";
import { categoryReducer } from "./categoryReducer";
import { questionsReducer } from "./questionsReducer";
import { questionReducer } from "./questionReducer";
import { gameReducer } from "./gameReducer";
import { errorReducer } from "./errorReducer";


const rootReducer = combineReducers({
  category: categoryReducer,
  questions: questionsReducer,
  currentQuestion: questionReducer,
  game: gameReducer,
  hasErrored: errorReducer,
});

export default rootReducer;