import React from 'react'
// useDispatch hook is used to modify values of a state and useSelector hook is used for accessing values of the state
import { useDispatch } from 'react-redux';
import { login, logout } from "../features/user";


function Login() {
    const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => {
        dispatch(login({ name: "Rose", age: 20, email: "rose@gmail.com"}));
      }}>Login</button>

      <button onClick={() => {
        dispatch(logout());
      }}>Logout</button>
    </div>
  )
}

export default Login
