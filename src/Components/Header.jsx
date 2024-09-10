import React from 'react'
import './Header.css'
import imgCart from "../FE_0B/assets/icon-cart.svg";
// import close from "../FE_0B/assets/icon-close.svg";
// import menu from "../FE_0B/assets/icon-menu.svg";


function Header() {
  
  
  
    return (
   <>
   <div className="header">
<div>Sneakers</div>
   <img className="cart-icon" src={imgCart} alt="Cart" />
    {/* <img className="close-icon" src={close} alt="Close" /> */}
    {/* <img className="menu-icon" src={menu} alt="Menu" /> */}
   </div>
   </>
  )
}

export default Header;