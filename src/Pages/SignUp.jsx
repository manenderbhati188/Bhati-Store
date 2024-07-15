import React from 'react';
import './Css/loginSignup.css'
import { Link } from 'react-router-dom';

export const SignUp = () => {
  return (
    <div className='loginsignup'>
      <div className='loginsignup-container'>
        <h1>Sign Up</h1>
        <div className='loginsignup-fields'>
          <input type='text' placeholder="Enter your name" required />
          <input type='email' placeholder='Enter your email' required />
          <input type='password' placeholder='Enter Password' required />
          <input type='password' placeholder='Confirm Password' required />
        </div>
        <div className='loginsignup-agree'>
          <input type='checkbox' id='agree' required />
          <label htmlFor='agree'>By continuing, I agree to the terms of use & privacy policy</label>
        </div>
       
        <button type='submit'>Sign Up</button>
  
        <Link to="/login" className='loginpage'>
          <p className='loginsignup-login'>Already have an account? <span>Login</span></p>
        </Link>
      </div>
    </div>
  );
};
