import { INCREMENT, DECREMENT, LOGIN, LOGOUT } from "../actions/actionTypes";
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

export { increment, decrement, login, logout };
