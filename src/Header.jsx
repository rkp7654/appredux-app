import { Link } from "react-router";
import AddToCart from "./AddToCart";

function Header(){
   return (
    
    <header className="header">
    <div className="logo">MyShop</div>

    <nav className="nav">
        <Link to="/">Home</Link>
        {/* <a href="#">Products</a>
        <a href="#">Contact</a> */}
    </nav>

    <AddToCart />
    </header>
   );
}

export default Header;