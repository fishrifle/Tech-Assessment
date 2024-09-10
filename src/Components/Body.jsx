import React, { useState } from 'react'
import './Body.css'
import minus from "../FE_0B/assets/icon-minus.svg";
import plus from "../FE_0B/assets/icon-plus.svg";
import del from '../FE_0B/assets/icon-delete.svg'
import quantity from '../FE_0B/assets/product.json'
import icon from '../FE_0B/assets/icon-cart.svg'
import productData from '../FE_0B/assets/product.json'

function Body() {
const product = productData.product;
    const [quantity, setQuantity] = useState(0);
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    console.log("cart", cart)
    const removeFromCart = (product) => {
        const newCart = cart.filter((item) => item !== product);
        setCart(newCart);
        setTotal(total - product.price);
    };

    const addToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        setTotal(total + product.price);
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
                <button onClick={addToCart} className="add"><img src={icon} alt="icon"></img>Add to cart</button>
            </div>
            <div>
                <button style={{ flexDirection: 'row' }} onClick={decrement} className='minus'><img src={minus} alt='minus'></img> </button>
                <p className="cart-total"></p>
                <button onClick={increment}><img className='plus' />
                    <img src={plus} alt='plus'></img>
                </button>

            </div>
            <div className="cart">




                <div className="cart-items">
                    {cart.map((product, index) => (
                        <div key={index} className="cart-item">
                            <img
                                src={product.image}
                                alt={product.name}
                                onError={(e) => {
                                    console.error(`failed to load image: ${product.image}`);
                                    e.target.src = 'https://via.placeholder.com/150';
                                }
                                }
                            />


                            <div>
                                <h3>{product.name}</h3>
                                <p>${product.price}</p>
                            </div>
                            <button className='remove-cart' onClick={() => removeFromCart(product)}><img src={del} alt="Delete" /></button>
                            cart items</div>
                    ))}
                </div>

            </div>

        </>
    )
}

export default Body