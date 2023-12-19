import React from "react";
import { Link, useNavigate } from "react-router-dom";
const Nav = () => {
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();
    const LogOut = () => {
        console.log("Hello World");
        localStorage.clear();
        navigate('/signup');
    }
    return (
        <div>
            <img className="img-logo" src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Amazon_icon.svg"></img>
            {auth ?
                <ul className="Nav-ul">
                    <li><Link to="/products">Products</Link></li>
                    <li><Link to="/add">Add Products</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link  onClick={LogOut} to="/logout" >Logout({JSON.parse(auth).name})</Link></li>
                </ul>
                :
                <ul className="Nav-ul nav-right">
                    <li> <Link to="/signup">Sign up</Link></li>
                    <li className="signup"><Link to="/login">Login</Link></li>
                </ul>
            }
        </div>

    )
}
export default Nav;