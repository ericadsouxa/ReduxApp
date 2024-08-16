import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import loginReducer from "./loginReducer";
import balanceReducer from "./balanceReducer";

const allReducers = combineReducers({
  counter: counterReducer,
  login: loginReducer,
  balance: balanceReducer,
});

export default allReducers;
