import React from "react";
import "./header.css";

const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <div className="navbar">
                    <div className="logo">
                        <h1>The Native Store</h1>
                    </div>
                    <nav>
                        <ul className="menuitems">
                            <li>Home</li>
                            <li>Products</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </nav>
                </div>

                <div className="row">
                    <div className="col-2">
                        <h1>Give your attire a <br />different look with Tote Bag</h1>
                        <p>Success isn't always about greatness. It's about Consistency. Consistent <br />hard work gains
                            success.
                            Greatness wil come.</p>
                        <button>Explore Now &#8594;</button>
                    </div>
                    <div className="col-2">
                        <img src="images/image1.jpg" alt="TheNative Store logo" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;




