import React, {useContext}from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png';
import star_icon_dull from '../Assets/star_dull_icon.png';
import { ShopContext } from '../../Context/ShopContext';
export const ProductDisplay = (props) => {
    const{product}=props;
    const {addToCart,RemoveFromCart}=useContext(ShopContext);
  return (
    <div className='productdisplay'>
        <div className='productdisplay-left'>
            <div className="productdisplay-img-list">
                <img src={product.image}/>
                <img src={product.image}/>
                <img src={product.image}/>
                <img src={product.image}/>
            </div>
            <div className="productdisplay-img">
                <img className='productdisplay-main-img' src={product.image}/>
            </div>
        </div>
        <div className='productdisplay-right'>
            <h1>{product.name}</h1>
            <div className='productdisplay-right-star'>
                <img src={star_icon}/>
                <img src={star_icon}/>
                <img src={star_icon}/>
                <img src={star_icon}/>
                <img src={star_icon_dull}/>
                <p>(145)</p>
            </div>
            <div className='productdisplay-rightprice'>
                <div className="productdisplay-right-price-old">₹{product.old_price}</div>
                <div className="productdisplay-right-price-new">₹{product.new_price}</div>
            </div>
            <div className="product_discription">
            A classic cotton T-shirt is a wardrobe staple known for its softness and breathability, 
            making it perfect for casual, 
            everyday wear. 
            Its simple, versatile design can be dressed up or down, providing comfort and ease of movement. 
            Paired with jeans or layered under a jacket, it offers a timeless, effortless style
            </div>
            <div className='Select-Size'>
                <h1>Select Size</h1>
                <div className='Product-size-short'>
                <div className="product-size">S</div>
                <div className="product-size">M</div>
                <div className="product-size">L</div>
                <div className="product-size">XL</div>
                <div className="product-size">XXL</div>
                </div>
                
            </div>
            <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
        </div>
    </div>
  )
}
