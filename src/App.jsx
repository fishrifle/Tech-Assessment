import React, { useState } from 'react';
import Header from './Components/Header.jsx';
import ProductPage from './Components/ProductPage.jsx';

export default function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, qty) => {
    setCartItems(prev => {
      const idx = prev.findIndex(i => i.name === product.name);
      if (idx > -1) {
        const arr = [...prev];
        arr[idx].quantity += qty;
        return arr;
      }
      return [...prev, { ...product, quantity: qty }];
    });
  };

  const removeFromCart = name => {
    setCartItems(prev => prev.filter(i => i.name !== name));
  };

  return (
    <>
      <Header cartItems={cartItems} onRemove={removeFromCart} />
      <ProductPage onAddToCart={addToCart} />
    </>
  );
}
