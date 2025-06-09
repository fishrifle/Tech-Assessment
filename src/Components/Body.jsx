import React, { useState } from 'react';
import './Body.css';
import minusIcon from '../FE_0B/assets/icon-minus.svg';
import plusIcon from '../FE_0B/assets/icon-plus.svg';

export default function Body({ onAddToCart }) {
    const [qty, setQty] = useState(0);

    const dec = () => setQty(q => Math.max(0, q - 1));
    const inc = () => setQty(q => q + 1);

    const add = () => {
        if (qty < 1) return;
        onAddToCart(qty);
        setQty(0);
    };

    return (
        <div className="body-container">
            <div className="qty-controls">
                <button onClick={dec}><img src={minusIcon} alt="-" /></button>
                <span>{qty}</span>
                <button onClick={inc}><img src={plusIcon} alt="+" /></button>
            </div>
            <button className="add-btn" onClick={add}>
                Add to Cart
            </button>
        </div>
    );
}
