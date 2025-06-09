import React, { useState } from 'react';
import productData from '../FE_0B/assets/product.json';

const Cart = () => {
  const [cartCount, setCartCount] = useState(0); // Track the number of items in the cart
  const [totalPrice, setTotalPrice] = useState(0); // Track the total price

  const product = productData.product; // Access product data from JSON

  const handleAddToCart = () => {
    // Calculate the price (apply sale discount if applicable)
    const itemPrice = product.isOnSale
      ? product.price - (product.price * product.saleOff) / 100
      : product.price;

    // Increase the cart count and update the total price
    setCartCount(cartCount + 1);
    setTotalPrice(totalPrice + itemPrice);
  };

  return (
    <div>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.isOnSale ? (
          <>
            <span style={{ textDecoration: 'line-through' }}>${product.price}</span>{' '}
            <span>${product.price - (product.price * product.saleOff) / 100}</span>
          </>
        ) : (
          `$${product.price}`
        )}
      </p>

      <button onClick={handleAddToCart}>Add to Cart</button>

      <div>
        <h3>Cart</h3>
        <p>Items in Cart: {cartCount}</p>
        <p>Total Price: ${totalPrice.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Cart;

