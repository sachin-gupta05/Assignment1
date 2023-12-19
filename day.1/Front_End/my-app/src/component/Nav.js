import React from "react";
import { Link, useNavigate } from "react-router-dom";
const Nav = () => {

    return (
        <div>

                <ul className="Nav-ul">
                    <li><Link to="/add-product">Add Products</Link></li>
                    <li><Link to="/barcode">Barcode</Link></li>
                </ul>
        </div>

    )
}
export default Nav;