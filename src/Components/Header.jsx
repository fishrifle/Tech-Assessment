import React, { useState, useRef, useEffect } from 'react';
import './Header.css';
import avatarImg from '../FE_0B/assets/avatar.png';
import cartIcon from '../FE_0B/assets/icon-cart.svg';
import deleteIcon from '../FE_0B/assets/icon-delete.svg';
import menuIcon from '../FE_0B/assets/icon-menu.svg';
import closeIcon from '../FE_0B/assets/icon-close.svg';

export default function Header({ cartItems, onRemove }) {
   const [openCart, setOpenCart] = useState(false);
   const [openMenu, setOpenMenu] = useState(false);
   const ref = useRef();

   // close on outside click
   useEffect(() => {
      const handler = e => {
         if (!ref.current.contains(e.target)) {
            setOpenCart(false);
            setOpenMenu(false);
         }
      };
      window.addEventListener('mousedown', handler);
      return () => window.removeEventListener('mousedown', handler);
   }, []);

   const totalCount = cartItems.reduce((sum, i) => sum + i.quantity, 0);

   return (
      <header className="header" ref={ref}>
         <div className="header-left">
            <span className="logo-text">Sneakers</span>
         </div>

         <nav className="nav-links">
            <a href="#collection">Collections</a>
            <a href="#men">Men</a>
            <a href="#women">Women</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
         </nav>

         <div className="header-right">
            {/* Cart */}
            <div className="cart-wrapper" onClick={() => setOpenCart(o => !o)}>
               <img src={cartIcon} alt="Cart" className="cart-icon" />
               {totalCount > 0 && <span className="cart-badge">{totalCount}</span>}
               {openCart && (
                  <div className="cart-dropdown shadow-box">
                     <h4>Cart</h4>
                     {cartItems.length === 0 ? (
                        <p className="empty">Your cart is empty.</p>
                     ) : (
                        <>
                           {cartItems.map((item, i) => (
                              <div key={i} className="dropdown-item">
                                 <img src={item.thumbnail} className="thumb-small" />
                                 <div className="item-info">
                                    <p className="name">{item.name}</p>
                                    <p className="price">
                                       ${item.price.toFixed(2)} x {item.quantity}{' '}
                                       <strong>${(item.price * item.quantity).toFixed(2)}</strong>
                                    </p>
                                 </div>
                                 <button className="remove-btn" onClick={() => onRemove(item.name)}>
                                    <img src={deleteIcon} alt="Remove" />
                                 </button>
                              </div>
                           ))}
                           <button className="checkout-btn">Checkout</button>
                        </>
                     )}
                  </div>
               )}
            </div>

            {/* Avatar */}
            <img src={avatarImg} alt="User" className="avatar" />

            {/* Mobile Menu */}
            <button className="mobile-menu-btn" onClick={() => setOpenMenu(m => !m)}>
               <img src={openMenu ? closeIcon : menuIcon} className="menu-icon" />
            </button>
         </div>

         {/* Slide-in mobile nav */}
         <div className={`mobile-menu ${openMenu ? 'open' : ''}`}>
            <a href="#collection">Collections</a>
            <a href="#men">Men</a>
            <a href="#women">Women</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
         </div>
      </header>
   );
}
