import React from "react";
import "./header.css";

const Header = () => {
    return ( 
        <div className="logo">
            <div>
                <h3>The Native Store</h3>  
            </div>
            <nav>
                <ul className="MenuItems">
                    <li><a>Home</a></li>
                    <li><a>About</a></li>
                    <li><a>Products</a></li>
                    <li><a>Contact</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;