import { combineReducers } from "redux";
import cgpaReducer from "./cgpaReducer";

const reducer = combineReducers({
  cgpaReducer: cgpaReducer,
});

export default reducer;
