import React,{useContext} from 'react'
import './cartItem.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png'
export const CartItems = () => {
    const {getTotalCartAmount,all_product,cartItems,addToCart,RemoveFromCart}=useContext(ShopContext);
  return (
    <div className='cartitems'>
        <div className="cartitems-format-main">
            <p className="">Product</p>
            <p className="">Title</p>
            <p className="">Price</p>
            <p className="">Quantity</p>
            <p className="">Total</p>
            <p className="">Remove</p>
        </div>
        <hr/>
        {all_product.map((item,i)=>{
            if(cartItems[item.id]>0)
            {
                return(
                <div className='cart-item-format cartitems-format-main'>
                    <img src={item.image} className='carticon-product-icon'/>
                    <p className='title'>{item.name}</p>
                    <p className='price'>{item.new_price}</p>
                    <button className='cartitems-quanity'>{cartItems[item.id]}</button>
                    <p className='new-price'>₹{item.new_price * cartItems[item.id]}</p>
                    <img className='cart-item-remove'src={remove_icon} onClick={()=>RemoveFromCart(item.id)} alt=''/>
                </div>
                )
            
            }
        })}
        <div className='cartitem-down'>
            <div className='cart-item-total'>
                <h1>Cart Totals</h1>
                <div className='cartitem-total-item'>
                    <p>Subtotal</p>
                    <p>₹{getTotalCartAmount()}</p>
                </div>
                <hr/>
                <div className='cartitems-total-item'>
                    <p>Shipping Fee</p>
                    <p>Free</p>
                </div>
                <hr/>
                <div className='cartitems-total-item'>
                    <h3>Total</h3>
                    <h3>₹{getTotalCartAmount()}</h3>
                </div>
                <button>PROCEED TO CHECKOUT</button>
            </div>
            <div className="cartitems-promocode">
                <p>If You ave Promo Code Enter it here</p>
                <div className="cart-promobox">
                <input type='text' placeholder='ManenderBhati188'></input>
                <button>SUBMIT</button>
            </div>
            </div>
        </div>
        
    </div>
  )
}
