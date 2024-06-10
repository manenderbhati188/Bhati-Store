import React from 'react';
import './Css/login.css';
import {Link} from 'react-router-dom';
export const Login = () => {
    return (
      <div className='loginsignup'>
      <div className='loginsignup-caintainer'>
        <h1>Sign Up</h1>
        <div className='loginsignup-fields'>
          <input type='text' placeholder="Manender Bhati" required></input>
          <input type='email' placeholder='manenderbhati188@gmail.com' required></input>
          <input type='password' placeholder='Enter Password' required></input>
          <input type='password' placeholder='Confirm Password' required></input>
        </div>
        <div className='loginsignup-agree'>
            <input type='checkbox' name='' id='' required></input>
            <p>By Continuing, i agree to the terms of use & privacy policy</p>
        </div>
       
        <button>Sign Up</button>
  
          <Link to="/Login" className='loginpage'><p className='loginsignup-login'>Already have an account? <span> Login</span></p></Link>
      </div>

    </div>
    )
  }
  