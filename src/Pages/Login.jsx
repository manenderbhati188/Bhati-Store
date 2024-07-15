import React from 'react';
import './Css/login.css';
import { Link } from 'react-router-dom';

export const Login = () => {
  return (
    <div className='loginsignup'>
      <div className='loginsignup-container'>
        <h1>Login</h1>
        <div className='loginsignup-fields'>
          <input type='email' placeholder='Email' required></input>
          <input type='password' placeholder='Password' required></input>
        </div>
        <button>Login</button>
        <Link to="/signup" className='loginpage'>
          <p className='loginsignup-login'>Don't have an account? <span>Sign Up</span></p>
        </Link>
      </div>
    </div>
  );
}

export default Login;
