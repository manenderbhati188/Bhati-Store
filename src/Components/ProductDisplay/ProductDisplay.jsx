import React, { useState, useContext } from 'react';
import './ProductDisplay.css';
import star_icon from '../Assets/star_icon.png';
import star_icon_dull from '../Assets/star_dull_icon.png';
import { ShopContext } from '../../Context/ShopContext';

export const ProductDisplay = (props) => {
    const { product } = props;
    const { addToCart } = useContext(ShopContext);
    const [selectedSize, setSelectedSize] = useState(null);
    const [warning, setWarning] = useState('');
    const [notification, setNotification] = useState('');

    const handleSizeClick = (size) => {
        setSelectedSize(size);
        setWarning(''); // Clear the warning when a size is selected
        setNotification(''); // Clear the notification when a size is selected
    };

    const handleAddToCart = () => {
        if (selectedSize) {
            addToCart(product.id, selectedSize);
            setNotification('Product added to cart successfully.');
        } else {
            setWarning('Please select a size before adding to cart.');
        }
    };

    return (
        <div className='productdisplay'>
            <div className='productdisplay-left'>
                <div className="productdisplay-img-list">
                    <img src={product.image} alt="product" />
                    <img src={product.image} alt="product" />
                    <img src={product.image} alt="product" />
                    <img src={product.image} alt="product" />
                </div>
                <div className="productdisplay-img">
                    <img className='productdisplay-main-img' src={product.image} alt="product" />
                </div>
            </div>
            <div className='productdisplay-right'>
                <h1>{product.name}</h1>
                <div className='productdisplay-right-star'>
                    <img src={star_icon} alt="star" />
                    <img src={star_icon} alt="star" />
                    <img src={star_icon} alt="star" />
                    <img src={star_icon} alt="star" />
                    <img src={star_icon_dull} alt="star" />
                    <p>(145)</p>
                </div>
                <div className='productdisplay-rightprice'>
                    <div className="productdisplay-right-price-old">₹{product.old_price}</div>
                    <div className="productdisplay-right-price-new">₹{product.new_price}</div>
                </div>
                <div className="product_discription">
                    A classic cotton T-shirt is a wardrobe staple known for its softness and breathability,
                    making it perfect for casual, everyday wear. Its simple, versatile design can be dressed
                    up or down, providing comfort and ease of movement. Paired with jeans or layered under a
                    jacket, it offers a timeless, effortless style.
                </div>
                <div className='Select-Size'>
                    <h1>Select Size</h1>
                    <div className='Product-size-short'>
                        {['S', 'M', 'L', 'XL', 'XXL'].map(size => (
                            <div
                                key={size}
                                className={`product-size ${selectedSize === size ? 'selected' : ''}`}
                                onClick={() => handleSizeClick(size)}
                            >
                                {size}
                            </div>
                        ))}
                    </div>
                </div>
                {warning && <p className='warning'>{warning}</p>}
                <button onClick={handleAddToCart}>ADD TO CART</button>
                {notification && <p className='notification'>{notification}</p>}
            </div>
        </div>
    );
};
