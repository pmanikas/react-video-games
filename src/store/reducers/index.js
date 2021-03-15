import { combineReducers } from "redux";
import gamesReducer from "./gamesReducer";

const rootReducer = combineReducers({
  gamesState: gamesReducer,
});

export default rootReducer;
