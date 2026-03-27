import { useDispatch, useSelector } from "react-redux";
import AddToCart from "./AddToCart";
import { addItem, removeItem, clearItem } from "./Redux/slice";
import { fetchProducts } from "./Redux/productSlice";
import { useEffect } from "react";

function Product(){

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchProducts());
    }, []);

    const selector = useSelector((state)=>state.products.items);
    //console.log(selector);

    const selectorCart = useSelector((state)=>state.cart.items);

     return (
        
        <section className="products">
        {/* <button className="add-btn" onClick={()=>dispatch(clearItem())}>Clear Cart</button> */}

        {
            selector ? selector.map((data, index)=>{
                //console.log(data);
                return (
                    <div className="product-card" key={index}>
                        <img src={data.thumbnail} alt={data.title} />

                        <h3 className="title">{data.title}</h3>

                        <h4 className="brand">{data.brand}</h4>

                        <div className="rating">
                            {"★".repeat(Math.round(data.rating))}
                            {"☆".repeat(5 - Math.round(data.rating))}
                            <span className="rating-value">({data.rating})</span>
                        </div>

                        <p className="description">{data.description}</p>

                        <div className="price">₹{data.price}</div>

                        <div className="btn-group">

                            {
                                selectorCart.find(cartItem => cartItem.id == data.id) ? 
                                    <button className="remove-btn" onClick={() => dispatch(removeItem(data))}>
                                        Remove Item from Cart 
                                    </button>
                                    :
                                    <button className="add-btn"  onClick={() => dispatch(addItem(data))}>
                                        Add to Cart 
                                    </button>
                                    
                                
                            }
                            
                            {/* <button className="remove-btn" onClick={() => dispatch(removeItem(1))}>
                                Remove
                            </button> */}
                        </div>
                    </div>
                );
            }):null
        }

        {/* <div className="product-card">
            <img src="https://picsum.photos/300/200?random=1"/>
            <h3>Product 1</h3>
            <p>Nice product description</p>
            <div className="price">₹500</div>
            <button className="add-btn" onClick={()=>dispatch(addItem(1))}>Add to Cart</button>
            <button className="add-btn" onClick={()=>dispatch(removeItem(1))}>Remove From Cart</button>
        </div>

        <div className="product-card">
            <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300"/>
            <h3>Product 2</h3>
            <p>Awesome product</p>
            <div className="price">₹400</div>
            <button className="add-btn" onClick={()=>dispatch(addItem(1))}>Add to Cart</button>
            <button className="add-btn" onClick={()=>dispatch(removeItem(1))}>Remove From Cart</button>
        </div>

        <div className="product-card">
            <img src="https://picsum.photos/300/200?random=2"/>
            <h3>Product 3</h3>
            <p>Best quality item</p>
            <div className="price">₹700</div>
            <button className="add-btn" onClick={()=>dispatch(addItem(1))}>Add to Cart</button>
            <button className="add-btn" onClick={()=>dispatch(removeItem(1))}>Remove From Cart</button>
        </div> */}

        </section>
     );
}

export default Product;