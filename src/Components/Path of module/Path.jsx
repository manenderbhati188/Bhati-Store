import React from 'react'
import './Path.css';
import arrow_icon from '../Assets/breadcrum_arrow.png';
export const Path = (props) => {
    const{product}=props;
  return(
    <div className='path'>
        HOME <img src={arrow_icon}/> SHOP <img src={arrow_icon}/> {product.category} <img src={arrow_icon}/> {product.name}
    </div>
  )
}
