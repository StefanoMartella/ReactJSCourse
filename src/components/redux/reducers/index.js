import { combineReducers } from "redux";
import counterReducer from "./counter-reduces";

const rootReducer = combineReducers({
  counter: counterReducer,
});

export default rootReducer;
