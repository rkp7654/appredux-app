import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { addItem, removeItem } from "./Redux/slice";
import { Link } from "react-router";

function AddToCart(){
    const [open, setOpen] = useState(false);
    
    const dispatch = useDispatch();

    const selectorCart = useSelector((state)=>state.cart.items);
    const selectorCartLength = selectorCart.length;

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(selectorCart));
        
    }, [selectorCart]);
   
   return (
        
        <>
            <div className="cart"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
            >     
                <Link to="/cart"><span className="cart-count">{selectorCartLength}</span>
                🛒
                </Link>
                <div className="cart-dropdown">
                {
                    
                    
                    selectorCart.length > 0 && selectorCart.map((data, index) => {
                        

                        return (
                           
                                <div className="cart-item" key={'cart'+index}>
                                    <img src={data.thumbnail} />
                                    <div className="item-details">
                                    <h4>{data.title}</h4>
                                    <p>Qty: <button className="remove-btn cart-btn" onClick={()=>dispatch(removeItem(data))}>-</button> {data.quantity} <button className="remove-btn cart-btn" onClick={()=>dispatch(addItem(data))}>+</button></p>
                                    
                                    </div>
                                    <div className="price">₹{data.price}</div>
                                    
                                </div>
                           
                        )
                    })
                }
                { selectorCart.length > 0 ? <a href="#" className="checkout-btn">Checkout</a> : <p>Your cart is empty</p>}
                </div>
            </div>
        </>
   );
}

export default AddToCart;