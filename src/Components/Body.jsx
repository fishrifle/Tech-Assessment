import React, { useState } from 'react'
import './Body.css'
import minus from "../FE_0B/assets/icon-minus.svg";
import plus from "../FE_0B/assets/icon-plus.svg";
import del from '../FE_0B/assets/icon-delete.svg'

import icon from '../FE_0B/assets/icon-cart.svg'
import productData from '../FE_0B/assets/product.json'

function Body() {
const product = productData.product;
    const [quantity, setQuantity] = useState(0);
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    console.log("cart", cart)
    const removeFromCart = (product) => {
        const newCart = cart.filter((item) => item.name !== product.name);
        setCart(newCart);
        setTotal(total - product.price * product.quantity);
    };
    
    const addToCart = (product, quantity) => {
        if (quantity < 1) return;
        const existingIndex = cart.findIndex((item) => item.name === product.name);
        let newCart;
        if (existingIndex !== -1) {
            newCart = cart.map((item, idx) =>
                idx === existingIndex
                    ? { ...item, quantity: item.quantity + quantity }
                    : item
            );
        } else {
            newCart = [...cart, { ...product, quantity }];
        }
        setCart(newCart);
        setTotal(total + product.price * quantity);
    };

    const decrement = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    };

    const increment = () => {
        setQuantity(quantity + 1);
    };

    return (
        <>
            <div>
                <button onClick={() => addToCart(product, quantity)} className="add">
                    <img src={icon} alt="icon" />
                    Add to cart
                </button>
            </div>
            <div>
                <button style={{ flexDirection: 'row' }} onClick={decrement} className='minus'>
                    <img src={minus} alt='minus' />
                </button>
                <p className="cart-total">{quantity}</p>
                <button onClick={increment}>
                    <img className='plus' src={plus} alt='plus' />
                </button>
            </div>
            <div>
                <h2>Cart</h2>
                {cart.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    cart.map((item, index) => (
                        <div key={index} className="cart-item">
                            <img
                                src={item.image}
                                alt={item.name}
                                onError={(e) => {
                                    console.error(`failed to load image: ${item.image}`);
                                    e.target.src = 'https://via.placeholder.com/150';
                                }}
                            />
                            <div>
                                <h3>{item.name}</h3>
                                <p>${item.price} x {item.quantity} = ${item.price * item.quantity}</p>
                            </div>
                            <button className='remove-cart' onClick={() => removeFromCart(item)}>
                                <img src={del} alt="Delete" />
                            </button>
                        </div>
                    ))
                )}
                <div>
                    <strong>Total: ${total}</strong>
                </div>
            </div>
        </>
    )
}

export default Body