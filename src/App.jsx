import { useDispatch, useSelector } from "react-redux";
import Counter from "./components/Counter";
import Login from "./components/Login";
import Home from "./components/Home";
import Balance from "./components/Balance";

import { login, logout } from "./actions";
function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  console.log(isLoggedIn);
  return (
    <>
      <Counter />
      <h1>Login Page</h1>
      <Login />
      <Balance />
    </>
  );
}

export default App;
