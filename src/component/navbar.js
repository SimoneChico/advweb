import React from "react";
import { Link } from "react-router-dom";
import '../index.css';

export const Navbar = () => {
    return (
        <div className="navbar">
            <Link to="/">Home</Link>
            <Link to="/add-products">Products</Link>
            <Link to="login">Login</Link>
            <Link to="signup">Sign-up</Link>
            <Link to="contacts">Contacts</Link>
        </div>
    )
}
export default Navbar