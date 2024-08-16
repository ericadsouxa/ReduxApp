import { DEPOSIT, WITHDRAW } from "../actions/actionTypes";

const balanceReducer = (state = 0, action) => {
  switch (action.type) {
    case DEPOSIT:
      return Number(state) + Number(action.payload);
    case WITHDRAW:
      return Number(state) - Number(action.payload);
    default:
      return state;
  }
};

export default balanceReducer;
