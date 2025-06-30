import React, { useContext } from 'react';
import './ProductDisplay.css';
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
    const { product } = props;
const {addTOCart} = useContext(ShopContext);

return(
    <div className="productdisplay">
<div className="productdisplay-left">
<div className="productdisplay-img-list">
<img src={product.image} alt="a" />
<img src={product.image} alt="b" />
<img src={product.image} alt="c" />
<img src={product.image} alt="d" />
</div>
<div className="productdisplay-img">
    <img className="productdisplay-main-img" src={product.image} alt="e" />
</div>
</div>

<div className="productdisplay-right">
    <h1>{product.name}</h1>
    <div className="productdisplay-right-star">
        <img src={star_icon} alt="f" />
        <img src={star_icon} alt="g" />
        <img src={star_icon} alt="h" />
        <img src={star_icon} alt="i" />
        <img src={star_dull_icon} alt="j" />
           <p>(122)</p>
    </div>
    <div className="productdisplay-right-prices">
        <div className="productdisplay-right-price-old">${product.old_price}</div>
        <div className="productdisplay-right-price-new">${product.new_price}</div>
    </div>
    <div className="productdisplay-right-description">Upgrade your wardrobe with our Classic Men's Shirt – the perfect blend of comfort, style, and everyday versatility. Made with premium breathable cotton, this shirt keeps you cool.</div>
    <div className="productdisplay-right-size">
        <h1>Select Size</h1>
        <div className="productdisplay-right-size">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
        </div>
    </div>
    <button onClick={()=>{addTOCart(product.id)}}>ADD TO CART</button>

    <p className='productdisplay-right-category'><span>Category :</span> Women, T-Shirt, CROP TOP</p>

     <p className='productdisplay-right-category'><span>Tags :</span> Modern, Latest</p>
</div>
    </div>
)
}

export default ProductDisplay;