import React from 'react';

const Cart = (props) => {
  const cart = props.cart;

  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    const product = cart[i];
    total = total + product.price;
  }

  let Shipping = 0;
  if (total > 35) {
    Shipping = 0;
  }
  else if (total > 15) {
    Shipping = 4.99;
  }
  else if (total > 0) {
    Shipping = 12.99;
  }

  const tex = total / 10;
  const grandTotal = (total + Shipping + Number(tex)).toFixed(2);

  const formatNumber = num => {
    const precision = num.toFixed(2);
    return Number(precision)
  }


  return (
    <div>
      <h3 className="">Cart Summery  </h3>
      <p>Items Orders : {cart.length}</p>
      <p>Product Price {formatNumber(total)} </p>
      <p><small>Tex + vat : {formatNumber(tex)}</small></p>
      <p><small>Shipping Cost: {formatNumber(Shipping)}</small></p>
      <p>
        Total Price : {grandTotal}
      </p>
    </div>
  );
};

export default Cart;