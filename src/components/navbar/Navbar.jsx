import React from "react";
import "./Navbar.css"
import { Link } from "react-router-dom";

function Navbar(){
    return(
        <div className="Navbar">
            <div className="logo">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnn-0XVadz74WjD93NdOgLorhUHWxRJvJLmw&s" alt="mymart" width={100} height={100} />
            </div>


            <div className="title">
                <h1>MyMart</h1>
            </div>


            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/electronics">Electronics</Link>
                <Link to="/jewelery">Jewelery</Link>
                <Link to="/mens-clothing">Mens</Link>
                <Link to="womens-clothing">Womens</Link>
            </div>

            <div className="nextlinks">
                <Link to="/profile"><i class="bi bi-person-circle"></i></Link>
                <Link to="/cart"><i class="bi bi-cart4"></i></Link>
                <Link to="/wishlist"><i class="bi bi-bag-heart-fill"></i></Link>
                <Link to="#" className="btn btn-outline-danger">Logout</Link>
            </div>


        </div>
    )
}


export default Navbar;