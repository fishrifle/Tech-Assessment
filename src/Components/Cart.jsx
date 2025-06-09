import React, { useState } from 'react';
import './Body.css';
import minus from "../FE_0B/assets/icon-minus.svg";
import plus from "../FE_0B/assets/icon-plus.svg";
import icon from "../FE_0B/assets/icon-cart.svg";
import productData from '../FE_0B/assets/product.json';

export default function Body({ onAddToCart }) {
  const product = productData.product || {};
  const [quantity, setQuantity] = useState(0);

  const decrement = () => setQuantity(q => Math.max(0, q - 1));
  const increment = () => setQuantity(q => q + 1);

  const handleAdd = () => {
    if (quantity < 1) return;

    // call the parent callback to increment the header badge
    onAddToCart();

    // reset the counter
    setQuantity(0);
  };

  return (
    <div className="body-wrapper">
      <div className="quantity-controls">
        <button onClick={decrement} className="minus">
          <img src={minus} alt="minus" />
        </button>
        <span className="cart-total">{quantity}</span>
        <button onClick={increment} className="plus">
          <img src={plus} alt="plus" />
        </button>

        <button onClick={handleAdd} className="add-to-cart">
          <img src={icon} alt="cart icon" /> Add to cart
        </button>
      </div>
    </div>
  );
}
import React from 'react';
import './Header.css';
import cartIcon from '../FE_0B/assets/icon-cart.svg';

export default function Header({ cartCount }) {
  return (
    <header className="header">
      <div className="header-left">
        <span className="header-title">Sneakers</span>
      </div>
      <div className="header-right">
        <div className="cart-wrapper">
          <img src={cartIcon} alt="Cart" className="cart-icon" />
          {cartCount > 0 && (
            <span className="cart-badge">{cartCount}</span>
          )}
        </div>
      </div>
    </header>
  );
}
