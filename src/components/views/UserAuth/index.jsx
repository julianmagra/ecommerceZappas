import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  registerUser,
  loginUser,
  logoutUser,
  loggedUser,
} from "../../../redux/userReducer";
import axios from "axios";
import Header from "../../Header";
import { Link, useLocation } from "react-router-dom";
import "./style.css";

const UserAuth = () => {
  const [registerForm, setRegisterForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });

  const showLogin = "/login" === useLocation().pathname;

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  // isLoggedHook
  // useEffect(() => {
  //   dispatch(loggedUser());
  // }, []);

  const onRegister = (e) => {
    e.preventDefault();
    dispatch(registerUser(registerForm));
  };

  const onLogin = (e) => {
    e.preventDefault();
    dispatch(loginUser(loginForm));
  };

  const logout = (e) => {
    dispatch(logoutUser());
  };

  const onChangeRegister = (e) => {
    const { name, value } = e.target;
    setRegisterForm({ ...registerForm, [name]: value });
  };

  const onChangeLogin = (e) => {
    const { name, value } = e.target;
    setLoginForm({ ...loginForm, [name]: value });
  };

  return (
    <>
      <div className="wrapper">
        <Header />
        <div className="container login_layout">
          <div id="form-wrapper">

            <nav>
              <Link to="/login">
              <div className={ showLogin ? 'active' : '' }>
                Login
              </div>
              </Link>
              <Link to="/register">
              <div className={ showLogin ? '' : 'active' }>
                Register
              </div>
              </Link>
            </nav>

            {showLogin ? (
              <form onSubmit={onLogin}>
                <input
                  placeholder="Email"
                  type="email"
                  name="email"
                  onChange={onChangeLogin}
                />
                <input
                  placeholder="Password"
                  type="password"
                  name="password"
                  onChange={onChangeLogin}
                />
                <button>Login</button>
              </form>
            ) : (
              <form onSubmit={onRegister}>
                <input
                  placeholder="First Name"
                  type="text"
                  name="firstName"
                  onChange={onChangeRegister}
                />
                <input
                  placeholder="Last Name"
                  type="text"
                  name="lastName"
                  onChange={onChangeRegister}
                />
                <input 
                  placeholder="Email"
                type="email" name="email" onChange={onChangeRegister} />
                <input
                  placeholder="Password"
                  type="password"
                  name="password"
                  onChange={onChangeRegister}
                />
                <button>Register</button>
              </form>
            )}
          </div>

          {/* <pre>{JSON.stringify(user, null, 2)}</pre>
      <button onClick={logout}>logout</button> */}
        </div>
      </div>
    </>
  );
};

export default UserAuth;
