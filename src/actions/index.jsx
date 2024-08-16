import {
  INCREMENT,
  DECREMENT,
  LOGIN,
  LOGOUT,
  DEPOSIT,
  WITHDRAW,
} from "../actions/actionTypes";
const increment = () => {
  return {
    type: INCREMENT,
  };
};

const decrement = () => {
  return {
    type: DECREMENT,
  };
};

const login = () => {
  return {
    type: LOGIN,
  };
};

const logout = () => {
  return {
    type: LOGOUT,
  };
};

const deposit = (amount) => {
  return {
    type: DEPOSIT,
    payload: amount,
  };
};

const withdraw = (amount) => {
  return {
    type: WITHDRAW,
    payload: amount,
  };
};

export { increment, decrement, login, logout, deposit, withdraw };
