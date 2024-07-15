import React, { useContext, useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

export const Navbar = () => {
  const [menu, setMenu] = useState("Shop");
  const { totalInCart } = useContext(ShopContext);
  
  return (
    <div className='navbar'>
      <div className='navbar-logo'>
        <Link to='/'><img src={logo} alt="Logo" className='banner' /></Link>
      </div>
      <ul className='nav-menu'>
        <li onClick={() => setMenu("Shop")}>
          <Link className='menu-options' to="/">Shop</Link>
          {menu === 'Shop' ? <hr /> : null}
        </li>
        <li onClick={() => setMenu("Mens")}>
          <Link className='menu-options' to="/mens">Men</Link>
          {menu === 'Mens' ? <hr /> : null}
        </li>
        <li onClick={() => setMenu("Women")}>
          <Link className='menu-options' to="/women">Women</Link>
          {menu === 'Women' ? <hr /> : null}
        </li>
        <li onClick={() => setMenu("Kids")}>
          <Link className='menu-options' to="/kids">Kids</Link>
          {menu === 'Kids' ? <hr /> : null}
        </li>
      </ul>
      <div className='nav-login-cart'>
        <Link to="/cart"><img src="https://t3.ftcdn.net/jpg/05/60/17/66/360_F_560176615_cUua21qgzxDiLiiyiVGYjUnLSGnVLIi6.jpg" className='nav-cart' alt="Cart" /></Link>
        <Link to="/signup"><button className='login-btn'>Login/Signup</button></Link>
        <div className='nav-login-count'>{totalInCart()}</div>
      </div>
    </div>
  );
};
