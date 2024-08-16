import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deposit, withdraw } from "../actions";

const Balance = () => {
  const balance = useSelector((state) => state.balance);
  const [inputAmount, setInputAmount] = useState(0);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Balance : Rs {balance}</h1>
      <input type="number" onChange={(e) => setInputAmount(e.target.value)} />
      <button onClick={() => dispatch(deposit(inputAmount))}>Deposit</button>
      <button onClick={() => dispatch(withdraw(inputAmount))}>Withdraw</button>
    </div>
  );
};

export default Balance;
