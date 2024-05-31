import React from 'react'
import './Subscribe.css';
export const Subscribe = () => {
  return (
    <div className='subscribe'>
        <h1>Get Exclusive Offers on your email</h1>
        <p>Subscribe to our newletter and stay updates</p>
        <div>
            <input type='email' placeholder='Enter Your Email Id'></input>
            <button>Subscribe</button>
        </div>
    </div>
  )
}
