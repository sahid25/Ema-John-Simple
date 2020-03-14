import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
  console.log(props);
  const { name, img, seller, price, stock } = props.Product;
  return (
    <div className="product">

      <div className="">
        <img src={img} alt="" />
      </div>

      <div className="">
        <h4 className="product-name"> {name} </h4> <br />
        <p><small> By: {seller} </small></p>
        <p>$ {price} </p> <br />
        <p> <small>Only {stock} left in stock - order soon</small></p>
        <button
          onClick={() => props.handelAddProduct(props.Product)}
          className="main-btn"> <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart</button>
      </div>



    </div>
  );
};

export default Product;