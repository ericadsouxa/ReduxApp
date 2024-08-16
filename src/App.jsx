import { useDispatch, useSelector } from "react-redux";
import Counter from "./components/Counter";
import Login from "./components/Login";
import Home from "./components/Home";

import { login, logout } from "./actions";
function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  console.log(isLoggedIn);
  return (
    <>
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

export default App;
