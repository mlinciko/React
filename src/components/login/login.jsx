import React from 'react';
import "./login.css";
import { loginUser } from './auth';
import { useNavigate } from "react-router-dom";
import userStore from './store/store';

const Login = () => {
  const state = { 
    login: "",
    password: "",
    errorMessage: null,
  } 
  const navigate = useNavigate();

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(state.login, state.password);
    if (loginUser(state.login, state.password)) {
      console.log(userStore.getState())
      navigate("/", {replace: true});
    } else {
      alert("Authorization failed!");
    }
  }

  const handleChangeLogin = (event) => {
    state.login = event.target.value
  }
  const handleChangePassword = (event) => {
    state.password = event.target.value
  }

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <form onSubmit={onSubmit}>
          <div className="login-form-item">
            <label htmlFor="name">Login</label>
            <input 
              className="input" 
              id="name" 
              type="text" 
              name="login"
              required
              onChange={handleChangeLogin}/>
          </div>

          <div className="login-form-item">
            <label htmlFor="name">Password</label>
            <input 
              className="input" 
              id="name" 
              type="password" 
              name="login"
              required
              onChange={handleChangePassword}/>
          </div>

          <button className="form-button" type="submit">Sign in</button>

        </form>
      </div>
    </div>
  );
}
 
export default Login;