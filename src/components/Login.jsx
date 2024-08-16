import { useDispatch, useSelector } from "react-redux";
import Counter from "./Counter";

import { login, logout } from "../actions";
function Login() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  console.log(isLoggedIn);
  return (
    <>
      <h1>Login Page</h1>
      <Counter />
      {isLoggedIn ? (
        <div>
          <h1>Logged In</h1>
          <button onClick={() => dispatch(logout())}>Logout</button>
        </div>
      ) : (
        <div>
          <h1>Logged Out</h1>
          <button onClick={() => dispatch(login())}>Login</button>
        </div>
      )}
    </>
  );
}

export default Login;
