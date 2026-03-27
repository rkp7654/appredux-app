import { useDispatch, useSelector } from 'react-redux';
import './Cart.css';
import { useEffect, useState } from 'react';
import { addItem, removeItem, removeItemFromCart, clearItem } from './Redux/slice';
import { useNavigate } from 'react-router';

function CartList(){
    
    const [totalOrderShipment, setOrderShipment] = useState(50);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const cartListSelector = useSelector((status) => status.cart.items);
    
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cartListSelector));
        
    }, [cartListSelector]);

    const totalOrderValue = cartListSelector.reduce((total, item) => total + (item.price * item.quantity), 0);

    const handleOrder = () => {
        localStorage.clear();
        dispatch(clearItem());

        alert("Order Placed");
        navigate('/');
    }

    return (
        <div className="cart-page">

            <h2 className="cart-title">Shopping Cart</h2>

            <div className="cart-container">

               
                <div className="cart-items">

                    {
                        cartListSelector && cartListSelector.map((data, index)=>{
                            
                            return (
                                <div className="cart-item" key={'cartList'+index}>
                                    <img src={data.thumbnail} />

                                    <div className="item-details">
                                    <h3 className="item-title">{data.title}</h3>
                                    <p className="item-brand">{data.brand}</p>

                                    <div className="quantity">
                                        <button onClick={()=>dispatch(removeItem(data))}>-</button>
                                        <span>{data.quantity}</span>
                                        <button onClick={()=>dispatch(addItem(data))}>+</button>
                                    </div>
                                    </div>

                                    <div className="item-price">₹{data.price}</div>

                                    <button className="remove-btn" onClick={()=>dispatch(removeItemFromCart(data))}>✖</button>
                                </div>
                            ); 
                        })
                    }

                </div>

                
                <div className="cart-summary">
                <h3>Order Summary</h3>

                <div className="summary-row">
                    <span>Subtotal</span>
                    <span>₹{totalOrderValue.toFixed(2)}</span>
                </div>

                <div className="summary-row">
                    <span>Shipping</span>
                    <span>₹50</span>
                </div>

                <div className="summary-row total">
                    <span>Total</span>
                    <span>₹{(totalOrderValue + totalOrderShipment).toFixed(2)}</span>
                </div>

                <button className="checkout-btn" onClick={handleOrder}>Proceed to Checkout</button>
                </div>

            </div>
            </div>
    );
}

export default CartList;