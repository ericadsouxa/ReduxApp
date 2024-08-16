import { LOGIN, LOGOUT } from "../actions/actionTypes";

const initialValue = {
  isLoggedIn: false,
};

const loginReducer = (state = initialValue, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLoggedIn: true,
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};

export default loginReducer;
