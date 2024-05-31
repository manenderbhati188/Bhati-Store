import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
// import instagram_icon from '../Assets/instagram_icon.png'
import linkedin_icon from '../Assets/linkedin.png';
import whatapp_icon from '../Assets/whatsapp_icon.png'
import instagram_icon from '../Assets/instagram.png';
import { Link } from 'react-router-dom'
export const Footer = () => {
  return (
    <div className='footer'>
        {/* <div className='footer_logo'>
            {/* <img src={footer_logo}/> 
            <p>BHATI'S STORE</p>
        </div> */}
        <ul className='footer_links'>
            <li>Become a Seller</li>
            <li>Advertise</li>
            <li>Gift Card</li>
            <li>Help Center</li>
            <li>Contact</li>
        </ul>
        <div className='linksandfooter'>
        <div className='footer-copyright'>
                <p>Copyright @ 2024-All Reserved By Manender Bhati</p>
            </div>

            <div className='footer-social-icon'>
                <div className='footer-icon-caintainer'>
                    <Link to='https://www.instagram.com/bhati_ottu' target='blank' ><img className='instagram' src={instagram_icon}/></Link>
                </div>
                 <div className='footer-icon-caintainer'>
                 <Link to='https://www.linkedin.com/in/manenderbhati188' target='blank'>  <img src={linkedin_icon} className='linkedin'/></Link>
                </div>
                
                <div className='footer-icon-caintai ner'>
                <img src={whatapp_icon} className='whatapp'/>
                </div> 
            </div>
        
            
        </div>
    </div>
    
  )
}
