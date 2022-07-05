import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import "../../styles/form.css";
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';
// import Pineapples from "../images/Pineapple.png";


const Login = (props) => {
  const [login, { error }] = useMutation(LOGIN_USER);
  const [formState, setFormState] = useState({ email: '', password: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    alert(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });
  
      Auth.login(data.login.token);
      alert(data);
    } catch (e) {
      console.error(e);
    }
  
    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };
  return (
    <div className="Login-flex">
      <div className="Login-img-size">
        {/* <img src={Pineapples} alt="Hero Image" className="Login-img" /> */}
        <a href="/">
          <h1 id="logo">Yummy!</h1>
        </a>
        <h2 id="slogan">We’ve Got You Coverd!</h2>
        <div className="text-container">
          <h2>Join Today in Choosing Hundreds of Healthy Products</h2>
        </div>
      </div>
      <div className="login-background">
        <h1>Welcome To Yummy! </h1>
        <h2>Login</h2>
        <form className="flex-display" onSubmit={handleFormSubmit}>
          <div>
            <label className="field field_v1">
              <input
                onChange={handleChange}
                type="email"
                name="email"
                placeholder="email"
                className="field__input"
                value={formState.email}
                required
              />
              <span className="field__label-wrap">
                <span className="field__label">Email</span>
              </span>
            </label>
          </div>
          <div>
            <label className="field field_v1">
              <input
                onChange={handleChange}
                type="password"
                name="password"
                placeholder="password"
                value={formState.password}
                className="field__input"
                required
              />
              <span className="field__label-wrap">
                <span className="field__label">Password</span>
              </span>
            </label>
          </div>
          <div className="btn-flex ">
            <button id="btn-login" type="submit">Login</button>
            {error && <div>Login failed</div>}
            <Link to="/signup" style={{ width: "100%" }}>
              <button id="btn-signup">Sign Up</button>
            </Link>
        </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
