import { combineReducers } from "redux";
import Todos from "./todos";

const rootReducer = combineReducers({
  todos: Todos,
});

export default rootReducer;
