import React from 'react';
import './Css/loginSignup.css';
export const LoginSignUp = () => {
  return (
    <div className='loginsignup'>
      <div className='loginsignup-caintainer'>
        <h1>Sign Up</h1>
        <div className='loginsignup-fields'>
          <input type='text' placeholder="Manender Bhati"></input>
          <input type='email' placeholder='manenderbhati188@gmail.com'></input>
          <input type='password' placeholder='Enter Password'></input>
        </div>
        <div className='loginsignup-agree'>
            <input type='checkbox' name='' id='' ></input>
            <p>By Continuing, i agree to the terms of use & privacy policy</p>
        </div>
       
        <button>Continue</button>
        <p className='loginsignup-login'>Already have an account? <span> Login</span></p>
        
      </div>

    </div>
  )
}
