import React,{useContext, useState} from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png'
import {Link} from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
export const Navbar = () => {
    const [menu,setMenu]=useState("Shop");
    const{totalInCart}=useContext(ShopContext);
  return (
    <div className='navbar'>
        <div className='navbar-logo'>
           <Link to='/'><img src={logo} alt="Logo" className='banner' /></Link>
        </div>
        <ul className='nav-menu'>
            <li  onClick={()=>setMenu("Shop")}><Link className='menu-options' to="/">Shop</Link>
            {menu==='Shop'?<hr/>:<></>}</li>
            
            <li onClick={()=>setMenu("mens")}>
                <Link className='menu-options' to="/mens">Men</Link>
                {menu==='Mens'?<hr/>:<></>}
            </li>
            <li onClick={()=>setMenu("Women")}>
                <Link className='menu-options' to="/women">Women</Link>
                {menu==='Women'?<hr/>:<></>}
            </li>
            <li onClick={()=>setMenu("Kids")}>
                <Link className='menu-options' to="/kids">Kids</Link>
                {menu==='Kids'?<hr/>:<></>}
            </li>
        </ul>
        <div className='nav-login-cart'>
            <Link to="/SignUp"><button className='login-btn'>Login</button></Link>
            <Link to="/cart"><img src={cart_icon} className='nav-cart'></img></Link>
            <div className='nav-login-count'>{totalInCart()}</div>
        </div>
    </div>

  );
}
