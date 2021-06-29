import React, { useState, useReducer } from 'react';
import axios from 'axios';
import API from '../api';

const formReducer = (state, event) => {
  if (event.reset) {
    return {
      username: '',
      password: '',
    };
  }
  return {
    ...state,
    [event.name]: event.value,
  };
};

const Login = () => {
  const [formData, setFormData] = useReducer(formReducer, {});

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    API.post('/login', formData);
  };

  const handleChange = (event) => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  };

  return (
    <div>
      <h1>Login Page</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>
            User Name:
            <input type='text' id='username' name='username' onChange={handleChange} />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input type='text' id='password' name='password' onChange={handleChange} />
          </label>
        </div>
        <button type='submit'>Login</button>
      </form>
    </div>
  );
};

export default Login;
