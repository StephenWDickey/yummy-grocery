import React, {useState} from "react";
import "../../App.css";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { Link } from "react-router-dom";

// import AuthService from utils/auth
import Auth from '../../utils/auth';

// import useMutation hook and ADD_USER Mutation
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';


function Signup() {

  const [formState, setFormState] = useState({ username: '', email: '', password: '' });
  
  // useMutation hook returns our mutation code
  // then we add error handling
  const [addUser, { error }] = useMutation(ADD_USER);


  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };


  
  // submit form (notice the async!)
  const handleFormSubmit = async event => {
    
    event.preventDefault();

    // use try/catch instead of promises to handle errors
    try {
      // execute addUser mutation and pass in variable data from form
      const { data } = await addUser({
        variables: { ...formState }
      });
      console.log(data);

      // pass the token into .login method
      // that we created in utils/auth
      Auth.login(data.addUser.token)
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="signup">
      <div className="container ">
        <div>
          <Link to="/">
            <MdOutlineKeyboardBackspace size={"3em"} />
          </Link>
        </div>
        <h2>Fill in the Details Below</h2>
        <form 
          className="flex-display"
          onSubmit={handleFormSubmit}>
          <label className="field field_v1">
            <input
              type="text"
              name="username"
              placeholder="username"
              className="field__input"
              required
              onChange={handleChange}
              value={formState.username}
            />
            <span className="field__label-wrap">
              <span className="field__label">Username</span>
            </span>
          </label>
          <label className="field field_v1">
            <input
              // value={}
              // onChange={}
              type="email"
              name="email"
              placeholder="email"
              className="field__input"
              required
              onChange={handleChange}
              value={formState.email}
            />
            <span className="field__label-wrap">
              <span className="field__label">Email</span>
            </span>
          </label>

          <label className="field field_v1">
            <input
              type="password"
              name="password"
              placeholder="password"
              className="field__input"
              required
              onChange={handleChange}
              value={formState.password}
            />
            <span className="field__label-wrap">
              <span className="field__label">Password</span>
            </span>
          </label>
          <button
            type="submit"
            style={{ margin: "5rem auto 0 auto", background: "" }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
